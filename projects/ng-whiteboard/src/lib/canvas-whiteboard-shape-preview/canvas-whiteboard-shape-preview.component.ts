import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {INewCanvasWhiteboardShape} from '../_services/canvas-whiteboard-shape.service';
import {CanvasWhiteboardShape} from '../_classes/shape/canvas-whiteboard-shape';
import {CanvasWhiteboardPoint} from '../_classes/canvas-whiteboard-point.model';
import {CanvasWhiteboardShapeOptions} from '../_classes/shape/canvas-whiteboard-shape-options';


@Component({
  selector: 'canvas-whiteboard-shape-preview',
  templateUrl: './canvas-whiteboard-shape-preview.component.html',
  styleUrls: ['./canvas-whiteboard-shape-preview.component.scss']
})
export class CanvasWhiteboardShapePreviewComponent implements AfterViewInit, OnChanges {
  @Input() readonly shapeConstructor!: INewCanvasWhiteboardShape<CanvasWhiteboardShape>;
  @Input() readonly shapeOptions!: CanvasWhiteboardShapeOptions;

  @ViewChild('canvasWhiteboardShapePreview') canvas!: ElementRef;

  ngAfterViewInit(): void {
    this.drawShapePreview();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.shapeConstructor || changes.shapeOptions) {
      this.drawShapePreview();
    }
  }

  drawShapePreview(): void {
    if (!this.canvas) {
      return;
    }

    const context: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    const concreteShape = new this.shapeConstructor(
      new CanvasWhiteboardPoint(0, 0),
      Object.assign(new CanvasWhiteboardShapeOptions(), this.shapeOptions)
    );

    concreteShape.drawPreview(context);
  }
}
