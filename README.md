# sprite-prototype 📚
Prototype that uses sprite-sheet animations

Viewable [HERE](https://daviddeejjames.github.io/sprite-prototype/)

## Compilation
`npm run sass`: Watch and compile styles.scss to styles.css

## Adding a new sprite
- In the markup:
  - Add `<div class="SPRITE_NAME sprite" data-sprite-rows="2" data-sprite-length="80"></div>` (preferably in visual order, e.g.: main page sprites are added left to right)
- In the styling:
  -
    ```
    .luna-park {
        top: 329px;
        left: 126px;
        width: 160px;
        height: 120px;

        &:hover {
            background-image: url(https://s3-ap-southeast-2.amazonaws.com/dev-sprites/RP_A09_160x120_V01.png);
        }
    }
    ```
  - Again, preferably in visual order.