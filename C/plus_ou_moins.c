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

int		receive(int n)
{
	int	t;
	printf("Quel est le nombre ? ");
	scanf("%d", &t);
	if (n == t)
		return (0);
	printf(n < t ? "C'est moins !\n" : "C'est plus !\n");
	return (1);
}

int     main(void)
{
    int	n;

    srand(time(NULL));
    n = rand() % 100 + 1;
    while (receive(n))
		;
	printf("Bravo, vous avez trouve le nombre mystere !!!\n");
    return (0);
}
