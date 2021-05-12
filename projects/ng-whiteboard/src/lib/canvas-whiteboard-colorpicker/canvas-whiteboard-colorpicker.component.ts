import {
  Component,
  Output,
  EventEmitter, OnInit, ViewChild, ElementRef, Input, HostListener
} from '@angular/core';

@Component({
  selector: 'canvas-whiteboard-colorpicker',
  templateUrl: './canvas-whiteboard-colorpicker.component.html',
  styleUrls: ['./canvas-whiteboard-colorpicker.component.scss']
})
export class CanvasWhiteboardColorPickerComponent implements OnInit {
  @Input() previewText!: string;
  @Input() readonly selectedColor: string = 'rgba(0,0,0,1)';
  @ViewChild('canvaswhiteboardcolorpicker', {static: true}) canvas!: ElementRef;

  @Input() readonly showColorPicker: boolean = false;
  private _context!: CanvasRenderingContext2D;

  @Output() toggleColorPicker = new EventEmitter<boolean>();
  @Output() colorSelected = new EventEmitter<string>();
  @Output() secondaryColorSelected = new EventEmitter<string>();

  @HostListener('document:touchstart', ['$event'])
  @HostListener('document:mousedown', ['$event'])
  closeOnExternalClick(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.target) && this.showColorPicker) {
      this.toggleColorPicker.emit(false);
    }
  }

  constructor(private elementRef: ElementRef) {
  }

  /**
   * Initialize the canvas drawing context. If we have an aspect ratio set up, the canvas will resize
   * according to the aspect ratio.
   */
  ngOnInit(): void {
    this._context = this.canvas.nativeElement.getContext('2d');
    this.createColorPalette();
  }

  createColorPalette(): void {
    let gradient = this._context.createLinearGradient(0, 0, this._context.canvas.width, 0);
    gradient.addColorStop(0, 'rgb(255, 0, 0)');
    gradient.addColorStop(0.15, 'rgb(255, 0, 255)');
    gradient.addColorStop(0.33, 'rgb(0, 0, 255)');
    gradient.addColorStop(0.49, 'rgb(0, 255, 255)');
    gradient.addColorStop(0.67, 'rgb(0, 255, 0)');
    gradient.addColorStop(0.84, 'rgb(255, 255, 0)');
    gradient.addColorStop(1, 'rgb(255, 0, 0)');
    this._context.fillStyle = gradient;
    this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);

    gradient = this._context.createLinearGradient(0, 0, 0, this._context.canvas.height);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
    this._context.fillStyle = gradient;
    this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);
  }

  doToggleColorPicker(event: Event | null): void {
    if (event) {
      event.preventDefault();
    }

    this.toggleColorPicker.emit(!this.showColorPicker);
  }

  determineColorFromCanvas(event: any): string {
    const canvasRect = this._context.canvas.getBoundingClientRect();
    const imageData = this._context.getImageData(event.clientX - canvasRect.left,
      event.clientY - canvasRect.top, 1, 1);

    return `rgba(${imageData.data[0]}, ${imageData.data[1]}, ${imageData.data[2]}, ${imageData.data[3]})`;
  }

  selectColor(color: string): void {
    this.colorSelected.emit(color);
    this.doToggleColorPicker(null);
  }
}
