describe('Aluno CRUD', () => {
  
  beforeEach(() => {
    cy.task("db:erase");
    cy.visit('http://localhost:3000');
  });

  it('Deve listar os alunos', () => {
    cy.task('db:create',{
      name:'Larissa',
      idade:20
    });
    cy.contains("Larissa");
  });
  it("Deve criar um novo aluno",()=>{
    cy.get('.RaCreateButton-root').click();
    cy.get('#name').type("Luna");
    cy.get('#idade').type("13");
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained').click();
    cy.contains("Element created");
    cy.visit('http://localhost:3000');
    cy.contains("Lu");
  });
  it("Deve remover um aluno", () =>{
    cy.task('db:create',{
      name:'Larissa',
      idade:20
    });
    cy.get('.MuiTableBody-root > :nth-child(1)').click();
    cy.get('.ra-delete-button').click();
    cy.contains("Element deleted");
  });
  it("Deve atualizar um aluno", () =>{
    cy.task('db:create',{
      name:'Larissa',
      idade:20
    });
    cy.get('.MuiTableBody-root > :nth-child(1)').click();
    cy.get('#name').clear().type("Luna72");
    cy.get('#idade').clear().type("13");
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained').click();
    cy.contains("Element updated");
  });
  
})