import {TodoSearch} from './index'
import {TodoContext} from '../TodoContext/index'
import { mount } from 'cypress/react'

describe('To do search', () =>{
    beforeEach(() =>{

        const searchValue = cy.stub().as("addTodo");
        const setSearchValue = cy.stub().as("setOpenModal");
        const value = { searchValue, setSearchValue };

        mount(
            <TodoContext.Provider value={value}>
                <TodoSearch></TodoSearch>
            </TodoContext.Provider>
        )
    })

    it("Everythig's ok", () =>{

    })
})