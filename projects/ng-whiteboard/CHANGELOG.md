
## Canvas version changes
#### v4.3.1 Experimental eraser
- Fixed doRedo being a private method
- Added experimental eraser functionality:\
  eraserLineWidth?: number;\
  eraseButtonEnabled?: boolean;\
  eraseButtonClass?: string;\
  eraseButtonText?: string;
  
#### v4.2.0 Remove drawing with middle mouse button
This allows for implementing a dragging mechanism

#### v4.1.0 Application refactor and custom UI template
- Updated to Angular 12
- Added TypeScript strict mode
- Added the option of adding a custom UI template (replaces the buttons) via the customWhiteboardUi input
#
