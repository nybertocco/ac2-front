import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarInscricao } from './cadastrar-inscricao';

describe('CadastrarInscricao', () => {
  let component: CadastrarInscricao;
  let fixture: ComponentFixture<CadastrarInscricao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarInscricao],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarInscricao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
