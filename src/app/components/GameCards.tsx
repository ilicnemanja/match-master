"use client";

import React, { useContext, useEffect } from 'react';
import Card from './Card';
import { GlobalStateContext, ICard } from '../context/globalState';

interface GameCardsProps {
    cardType: string;
}

export default function GameCards({ cardType }: GameCardsProps) {

    console.log('GameCards component rendered, cardType:', cardType);

    const { state, dispatch } = useContext(GlobalStateContext);

    // create a unique cards array
    const cards = [
        {
            id: '1',
            name: 'Cat',
            cardType: 'Animals',
            isFlipped: false,
            isMatched: false,
            image: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'
        },
        {
            id: '2',
            name: 'Dog',
            cardType: 'Animals',
            isFlipped: false,
            isMatched: false,
            image: 'https://images.dog.ceo/breeds/shiba/shiba-15.jpg'
        },
        {
            id: '3',
            name: 'Cat',
            cardType: 'Animals',
            isFlipped: false,
            isMatched: false,
            image: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'
        },
        {
            id: '4',
            name: 'Dog',
            cardType: 'Animals',
            isFlipped: false,
            isMatched: false,
            image: 'https://images.dog.ceo/breeds/shiba/shiba-15.jpg'
        }
    ];

    // Dispatch the cards to global state once on component mount
    useEffect(() => {
        dispatch({ type: 'SET_CARDS_INFO', payload: { cards } });
    }, [dispatch]);

    // Filter cards based on the cardType prop
    const filteredCards = state.cardsInfo.cards.filter(card => card.cardType === cardType);

    const shuffleArray = (array: ICard[]) => {
        // Fisher-Yates shuffle algorithm
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    };
    
    const generateCards = () => {
        const shuffledCards = shuffleArray([...filteredCards]); // Shuffle the cards array
        return shuffledCards.map((card: ICard) => (
            <Card key={Math.random() * 1000} {...card} />
        ));
    };
    
    

    return (
        <div className="grid grid-cols-5 gap-5 place-items-center">
            {generateCards()}
        </div>
    );
}
