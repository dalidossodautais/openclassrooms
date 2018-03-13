/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   plus_ou_moins.c                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ddosso-d <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/03/12 17:31:43 by ddosso-d          #+#    #+#             */
/*   Updated: 2018/03/12 17:33:37 by ddosso-d         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int     main(void)
{
    int	n;
	int	t;

    srand(time(NULL));
    n = rand() % 100 + 1;
	do {
	printf("Quel est le nombre ? ");
	scanf("%d", &t);
	if (n < t)
		printf("C'est moins !\n");
	if (n > t)
		printf("C'est plus !\n");
	}
    while (n != t);
	printf("Bravo, vous avez trouve le nombre mystere !!!\n");
    return (0);
}
