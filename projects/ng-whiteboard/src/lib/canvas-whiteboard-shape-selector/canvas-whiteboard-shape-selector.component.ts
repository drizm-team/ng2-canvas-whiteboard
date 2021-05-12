import {
  Component,
  ElementRef,
  EventEmitter, HostListener,
  Input,
  Output
} from '@angular/core';
import {CanvasWhiteboardShapeService, INewCanvasWhiteboardShape} from '../_services/canvas-whiteboard-shape.service';
import {CanvasWhiteboardShape} from '../_classes/shape/canvas-whiteboard-shape';
import {CanvasWhiteboardShapeOptions} from '../_classes/shape/canvas-whiteboard-shape-options';
import {Observable} from 'rxjs';


@Component({
  selector: 'canvas-whiteboard-shape-selector',
  templateUrl: './canvas-whiteboard-shape-selector.component.html',
  styleUrls: ['./canvas-whiteboard-shape-selector.component.scss']
})
export class CanvasWhiteboardShapeSelectorComponent {
  @Input() readonly showShapeSelector: boolean = false;
  @Input() readonly selectedShapeConstructor!: INewCanvasWhiteboardShape<CanvasWhiteboardShape>;
  @Input() readonly shapeOptions!: CanvasWhiteboardShapeOptions;

  @Output() toggleShapeSelector = new EventEmitter<boolean>();
  @Output() shapeSelected = new EventEmitter<INewCanvasWhiteboardShape<CanvasWhiteboardShape>>();

  registeredShapes$: Observable<INewCanvasWhiteboardShape<CanvasWhiteboardShape>[]>;

  @HostListener('document:touchstart', ['$event'])
  @HostListener('document:mousedown', ['$event'])
  closeOnExternalClick(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.target) && this.showShapeSelector) {
      this.toggleShapeSelector.emit(false);
    }
  }

  constructor(private elementRef: ElementRef,
              private canvasWhiteboardShapeService: CanvasWhiteboardShapeService) {
    this.registeredShapes$ = this.canvasWhiteboardShapeService.registeredShapes$;
  }

  selectShape(shape: INewCanvasWhiteboardShape<CanvasWhiteboardShape>): void {
    this.shapeSelected.emit(shape);
    this.doToggleShapeSelector(null);
  }

  doToggleShapeSelector(event: Event | null): void {
    if (event) {
      event.preventDefault();
    }

    this.toggleShapeSelector.emit(!this.showShapeSelector);
  }
}
