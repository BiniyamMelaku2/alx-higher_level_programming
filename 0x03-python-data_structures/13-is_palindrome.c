#include "lists.h"
#include <stddef.h>

/**
 * is_palindrome - check if listint_t is palindrome or not
 * @head: pointer to head of list
 * Return: 0 not palindrome 1 yes palindrome
 */
int is_palindrome(listint_t **head)
{
listint_t *tail = *head;
listint_t *temp = *head;
int i, j, check, len;
if (*head == NULL)
return (1);
for (i = 0; temp->next; i++)
temp = temp->next;
len = (i + 1) / 2;
for (j = 0; j < len; j++)
{
if (temp->n != tail->n)
return (0);
temp = *head;
tail = tail->next;
i--;
for (check = 0; check < i; check++)
temp = temp->next;
}
return (1);
}

