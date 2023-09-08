export type Position = { x: number; y: number };

export type Point = { id?: string; x: number; y: number };

export type Points = Point[];

const isLeft = (p0: Position, p1: Position, p2: Position): number => {
  return (p1.x - p0.x) * (p2.y - p0.y) - (p2.x - p0.x) * (p1.y - p0.y);
};

const wnPoly = (point: Point, points: Points) => {
  const { x, y } = point;
  let wn = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const x0 = points[i].x;
    const y0 = points[i].y;
    const x1 = points[i + 1].x;
    const y1 = points[i + 1].y;

    if (y0 <= y) {
      if (y1 > y) {
        if (isLeft({ x: x0, y: y0 }, { x: x1, y: y1 }, { x, y }) > 0) {
          wn += 1;
        }
      }
    } else {
      if (y1 <= y) {
        if (isLeft({ x: x0, y: y0 }, { x: x1, y: y1 }, { x, y }) < 0) {
          wn -= 1;
        }
      }
    }
  }

  return wn;
};

export const pointInPolygon = (point: Point, points: Points) => {
  return wnPoly(point, points) !== 0;
};
