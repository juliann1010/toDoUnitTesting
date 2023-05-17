import {TodoForm} from './index';
import {TodoContext} from '../TodoContext/index'
import { mount } from 'cypress/react'


describe('Probar el formulario de To do', ()=>{

    beforeEach(() =>{

        const addTodo = cy.stub().as("addTodo");
        const setOpenModal = cy.stub().as("setOpenModal");
        const value = { addTodo, setOpenModal };

        mount(
            <TodoContext.Provider value={value}>
                <TodoForm/>
            </TodoContext.Provider>
        )
    })

    it("El formulario carga correctamente", () => {
        
        cy.get('[data-cy="Header-Todo"]').contains('Escribe tu nuevo TODO');
        cy.get('[data-cy="Textarea-Todo"]').should("have.value", '');
        cy.get('[data-cy="Button-Submit"]').should('be.visible');


    })
    
    it("Agregar un To do en el formulario", ()=>{

        // Type a new TODO into the input field
        cy.get('[data-cy="Textarea-Todo"]').type("Comprar leche");

        // Click the "Agregar" button to submit the new TODO
        cy.get(".TodoForm-button--add").click().then(() => {
        // Verify that the addTodo function was called with the correct argument
        cy.get("@addTodo").should("have.been.calledWith", "Comprar leche");

        // Verify that the setOpenModal function was called with the value false
        cy.get("@setOpenModal").should("have.been.calledWith", false);
        });

    })
})