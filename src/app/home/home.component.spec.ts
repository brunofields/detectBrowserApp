import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoModel, HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve ser criado um humano quando possui os dados corretos', () => {
    component.criarHumano();
    expect(component.corpo.cabeca).toEqual(1);
    expect(component.corpo.tronco).toBe(1);
    expect(component.corpo.membros).toBe(4);
  });


});
