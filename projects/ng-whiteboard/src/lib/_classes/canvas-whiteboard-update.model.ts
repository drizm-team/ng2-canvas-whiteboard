import {CanvasWhiteboardShapeOptions} from './shape/canvas-whiteboard-shape-options';

export enum CanvasWhiteboardUpdateType {
  START = 0,
  DRAG = 1,
  STOP = 2
}

export class CanvasWhiteboardUpdate {
  x?: number;
  y?: number;
  type?: CanvasWhiteboardUpdateType;
  UUID?: string;
  selectedShape?: string;
  selectedShapeOptions?: CanvasWhiteboardShapeOptions;

  static deserializeJson(json: any): CanvasWhiteboardUpdate | null {
    let parsedJson;
    try {
      parsedJson = JSON.parse(json);
      return new CanvasWhiteboardUpdate(
        parsedJson.x,
        parsedJson.y,
        parsedJson.type,
        parsedJson.uuid,
        parsedJson.selectedShape,
        parsedJson.selectedShapeOptions);
    } catch (e) {
      console.error('The canvas whiteboard update is not parseable');
      return null;
    }
  }

  constructor(x?: number,
              y?: number,
              type?: CanvasWhiteboardUpdateType,
              UUID?: string,
              selectedShape?: string,
              selectedShapeOptions?: CanvasWhiteboardShapeOptions) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.UUID = UUID;
    this.selectedShape = selectedShape;
    this.selectedShapeOptions = selectedShapeOptions;
  }

  stringify(): string {
    const objectToSerialize = {
      x: this.x?.toFixed(3),
      y: this.y?.toFixed(3),
      type: this.type,
      uuid: this.UUID,
      selectedShape: this.selectedShape,
      selectedShapeOptions: this.selectedShapeOptions || undefined
    };

    return JSON.stringify(objectToSerialize);
  }
}
