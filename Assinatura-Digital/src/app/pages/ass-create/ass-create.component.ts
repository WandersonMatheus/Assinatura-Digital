import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ass-create',
  imports: [ReactiveFormsModule],
  templateUrl: './ass-create.component.html',
  styleUrl: './ass-create.component.scss'
})
export class AssCreateComponent {
  form: FormGroup;
  clientes: any[] = [];
  termos: any[] = [];
  cenarios: any[] = [];
  linkGerado: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      clienteId: [''],
      termoId: [''],
      cenarioId: ['']
    });
  }

  ngOnInit(): void {
    this.http.get('/api/clientes').subscribe((res: any) => this.clientes = res);
    this.http.get('/api/termos').subscribe((res: any) => this.termos = res);
    this.http.get('/api/cenarios').subscribe((res: any) => this.cenarios = res);
  }

  gerarLink() {
    const payload = this.form.value;
    this.http.post('/api/assinaturas/criar', payload).subscribe((res: any) => {
      this.linkGerado = res.linkAssinatura;
    });
  }

  copiarLink() {
    if (this.linkGerado) {
      navigator.clipboard.writeText(this.linkGerado);
      alert('Link copiado para a área de transferência!');
    }
  }
}
