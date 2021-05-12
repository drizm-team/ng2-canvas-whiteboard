import { NgModule } from '@angular/core';
import { CanvasWhiteboardComponent } from './canvas-whiteboard.component';
import { CommonModule } from '@angular/common';
import { CanvasWhiteboardColorPickerComponent } from './canvas-whiteboard-colorpicker/canvas-whiteboard-colorpicker.component';
import { CanvasWhiteboardShapeSelectorComponent } from './canvas-whiteboard-shape-selector/canvas-whiteboard-shape-selector.component';
import { CanvasWhiteboardShapePreviewComponent } from './canvas-whiteboard-shape-preview/canvas-whiteboard-shape-preview.component';
import { CanvasWhiteboardService } from './_services/canvas-whiteboard.service';
import { CanvasWhiteboardShapeService } from './_services/canvas-whiteboard-shape.service';

@NgModule({
  declarations: [
    CanvasWhiteboardComponent,
    CanvasWhiteboardColorPickerComponent,
    CanvasWhiteboardShapeSelectorComponent,
    CanvasWhiteboardShapePreviewComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CanvasWhiteboardService,
    CanvasWhiteboardShapeService
  ],
  exports: [CanvasWhiteboardComponent]
})
export class CanvasWhiteboardModule {

}
