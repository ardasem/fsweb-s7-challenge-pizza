describe("Member Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('Anasayfa doğru yükleniyor.',()=>{
    cy.visit("http://localhost:3000");
    cy.get('header').should("have.length", 1);
    cy.get('button').should("have.length", 4)
    cy.get('div[class="foodcard--big"').should("have.length", 1);
    cy.get('div[class="foodcard--small"').should("have.length",1);
    cy.get('div[class="foodcard--small card-two"').should("have.length", 1);
    cy.get('span[class="category"]').should('have.length',10)
    cy.get('span[class="category active"]').should('have.length',2)
    cy.get('div[class="food--card"').should("have.length",3);
    cy.get('footer').should("have.length", 1);
   
  });

  it('Form alanları doğru yükleniyor.',()=>{
    cy.visit("http://localhost:3000");
    cy.get('button[class=custom--button]').click();
    cy.get('input').should("have.length", 16);
    cy.get('textarea').should("have.length", 2);
    cy.get('select').should("have.length", 1);
    cy.get('option').should("have.length", 3);
    cy.get('button').should('have.length',3);
  });


  it('Hatalar calışıyor ve button doğru davranış sergiliyor.',()=>{
    cy.visit("http://localhost:3000");
    cy.get('button[class=custom--button]').click();
    cy.get('textarea[name=name]').type('A');
    cy.get("[data-cy='error']").should('have.length',1).should('have.text',"Lütfen en az 2 karakter giriniz.");
    cy.get('textarea[name=name]').clear();
    cy.get("[data-cy='error']").should('have.length',1).should('have.text',"Lütfen isminizi giriniz.");
    cy.get('textarea[name=name]').type('Arda');
    cy.get('button[id=order-button]').should('be.disabled'); 

    cy.get('select[name=dough]').select('thin');
    cy.get('select[name=dough]').select('');
    cy.get("[data-cy='error']").should('have.length',1).should('have.text',"Lütfen hamur kalınlığı seçiniz.");
    cy.get('select[name=dough]').select('thick');
    cy.get('select[name=dough]').select('');
    cy.get("[data-cy='error']").should('have.length',1).should('have.text',"Lütfen hamur kalınlığı seçiniz.");
    cy.get('select[name=dough]').select('thick');
    cy.get('button[id=order-button]').should('be.disabled'); 

    cy.get('label[data-cy=testcheckbox]').contains('Sucuk').click();
    cy.get('label[data-cy=testcheckbox]').contains('Sosis').click();
    cy.get('label[data-cy=testcheckbox]').contains('Soğan').click();
    cy.get("[data-cy='error']").should('have.length',1).should('have.text',"Lütfen en az 4 adet malzeme seçiniz.");
    cy.get('button[id=order-button]').should('be.disabled'); 

    cy.get('label[data-cy=testcheckbox]').contains('Mısır').click();
    cy.get('label[data-cy=testcheckbox]').contains('Sarımsak').click();
    cy.get('label[data-cy=testcheckbox]').contains('Biber').click();
    cy.get('label[data-cy=testcheckbox]').contains('Ananas').click();
    cy.get('label[data-cy=testcheckbox]').contains('Jalapeno').click();
    cy.get('label[data-cy=testcheckbox]').contains('Domates').click();
    cy.get('label[data-cy=testcheckbox]').contains('Kanada Jambonu').click();
    cy.get('label[data-cy=testcheckbox]').contains('Kabak').click();
    cy.get("[data-cy='error']").should('have.length',1).should('have.text',"Lütfen en fazla 10 adet malzeme seçiniz.");
    cy.get('button[id=order-button]').should('be.disabled'); 

  })

  it("Alışveriş başarılı.", () => {
    cy.get('button[class=custom--button]').click();
    cy.get('textarea[name=name]').type('Arda');
    cy.get('label[data-cy=testradio]').click();
    cy.get('select[name=dough]').select('thin');
    cy.get('label[data-cy=testcheckbox]').contains('Pepperoni').click();
    cy.get('label[data-cy=testcheckbox]').contains('Sucuk').click();
    cy.get('label[data-cy=testcheckbox]').contains('Sosis').click();
    cy.get('label[data-cy=testcheckbox]').contains('Soğan').click();
    cy.get('button[id=order-button]').click(); 
  });


  

 




});
