import { ShapeModel } from '@/core/model';

interface CanvasBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const calculateCanvasBounds = (shapes: ShapeModel[]): CanvasBounds => {
  const MARGIN = 10;
  const canvasBounds: CanvasBounds = {
    x: Infinity,
    y: Infinity,
    width: 0,
    height: 0,
  };

  if (shapes.length === 0) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  }

  shapes.forEach(shape => {
    // Calculate min x and y
    if (shape.x < canvasBounds.x) {
      canvasBounds.x = shape.x;
    }
    if (shape.y < canvasBounds.y) {
      canvasBounds.y = shape.y;
    }

    // Calculate max x and y
    if (shape.x + shape.width > canvasBounds.width) {
      canvasBounds.width = shape.x + shape.width;
    }
    if (shape.y + shape.height > canvasBounds.height) {
      canvasBounds.height = shape.y + shape.height;
    }
  });

  // Calculate the actual width and height and apply margin
  canvasBounds.x -= MARGIN;
  canvasBounds.y -= MARGIN;
  canvasBounds.width = canvasBounds.width - canvasBounds.x + MARGIN;
  canvasBounds.height = canvasBounds.height - canvasBounds.y + MARGIN;

  return canvasBounds;
};
