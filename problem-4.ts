
{

    type Circle = { shape: "circle"; radius: number };
    type Rectangle = { shape: "rectangle"; width: number; height: number };

    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === "circle") {
            const result = (Math.PI * shape.radius ** 2).toFixed(2);
            return Number(result);
        } else {
            return shape.width * shape.height;
        }
    }


    console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
    console.log(calculateShapeArea({ shape: "rectangle", width: 4, height: 6 }));

}