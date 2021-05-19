import {TemplateRef} from '@angular/core';


export interface CanvasWhiteboardOptions {
  customWhiteboardUi?: TemplateRef<any>;
  batchUpdateTimeoutDuration?: number;
  imageUrl?: string;
  aspectRatio?: number;
  strokeColor?: string;
  lineWidth?: number;
  eraserLineWidth?: number;
  drawButtonEnabled?: boolean;
  drawButtonClass?: string;
  drawButtonText?: string;
  clearButtonEnabled?: boolean;
  clearButtonClass?: string;
  clearButtonText?: string;
  eraseButtonEnabled?: boolean;
  eraseButtonClass?: string;
  eraseButtonText?: string;
  undoButtonEnabled?: boolean;
  undoButtonClass?: string;
  undoButtonText?: string;
  redoButtonEnabled?: boolean;
  redoButtonClass?: string;
  redoButtonText?: string;
  saveDataButtonEnabled?: boolean;
  saveDataButtonClass?: string;
  saveDataButtonText?: string;
  strokeColorPickerEnabled?: boolean;
  strokeColorPickerText?: string;
  fillColorPickerEnabled?: boolean;
  fillColorPickerText?: string;
  shouldDownloadDrawing?: boolean;
  startingColor?: string;
  scaleFactor?: number;
  drawingEnabled?: boolean;
  erasingEnabled?: boolean;
  showStrokeColorPicker?: boolean;
  showFillColorPicker?: boolean;
  downloadedFileName?: string;
  lineJoin?: string;
  lineCap?: string;
  shapeSelectorEnabled?: boolean;
  showShapeSelector?: boolean;
  fillColor?: string;
}
