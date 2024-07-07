import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink,HttpClientModule],
  providers:[ProductoService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  productoForm: FormGroup;
  categorias: any[] = [];
  productos: any[] = [];

  constructor(private fb: FormBuilder, private productoService: ProductoService) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      precio: ['', Validators.required],
      categoria_id: [''],
      imagen_url: ['']
    });
  }

  ngOnInit(): void {
    this.cargarCategorias();
    this.cargarProductos();
  }

  cargarCategorias() {
    this.productoService.obtenerCategorias().subscribe(
      data => {
        this.categorias = data;
      },
      error => {
        console.error('Error al cargar categorías', error);
      }
    );
  }

  cargarProductos() {
    // Aquí iría la lógica para cargar los productos existentes
  }

  crearProducto() {
    if (this.productoForm.valid) {
      this.productoService.crearProducto(this.productoForm.value).subscribe(
        response => {
          console.log('Producto creado', response);
          this.cargarProductos(); // Recargar la lista de productos
        },
        error => {
          console.error('Error al crear producto', error);
        }
      );
    }
  }

  eliminarProducto(productoId: number) {
    this.productoService.eliminarProducto(productoId).subscribe(
      response => {
        console.log('Producto eliminado', response);
        this.cargarProductos(); // Recargar la lista de productos
      },
      error => {
        console.error('Error al eliminar producto', error);
      }
    );
  }
}