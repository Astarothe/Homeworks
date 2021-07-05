import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    console.log(newState)
    expect(newState[0].age).toBe(66)
    expect(newState[1]._id).toBe(3)
    expect(newState[2].name).toBe("Дмитрий")
    expect(newState).toEqual([
        {_id: 1, name: 'Александр', age: 66},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 0, name: 'Кот', age: 3},
    ])
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    expect(newState[0].age).toBe(3)
    expect(newState[1]._id).toBe(2)
    expect(newState[2].name).toBe("Ирина")
    expect(newState).toEqual([
        {_id: 0, name: 'Кот', age: 3},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 1, name: 'Александр', age: 66},
    ])
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})

    console.log(newState)
    expect(newState).not.toContainEqual({_id: 2, name: 'Коля', age: 16})
    expect(newState).not.toContainEqual({_id: 0, name: 'Кот', age: 3})
    expect(newState).toEqual([
        {_id: 1, name: 'Александр', age: 66},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ])
})
