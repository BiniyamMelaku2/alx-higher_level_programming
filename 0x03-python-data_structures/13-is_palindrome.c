#include "lists.h"
#include <stddef.h>
#include <stdio.h>

/**
 * is_palindrome - check if listint_t is palindrome or not
 * @head: pointer to head of list
 * Return: 0 not palindrome 1 yes palindrome
 */
int is_palindrome(listint_t **head)
{
listint_t *tail, *temp;
listint_t *node = *head;
int i, j, k, l;
if (*head == NULL)
return (1);
for (i = 0; node; i++)
node = node->next;
for (j = 0; j < i / 2; j++)
{
temp = *head;
tail = *head;
for (l = 0; l < j; l++)
temp = temp->next;
for (k = 0; k < i - 1 - j; k++)
tail = tail->next;
if (temp->n != tail->n)
return (0);
}
return (1);
}
