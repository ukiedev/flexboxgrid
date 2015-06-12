# flexboxgrid

Custom Flexbox Grid using Bootstrap mixins (SASS)

Alignment
Flexbox container properties
$class - 'xs, sm, md, lg'

.start-$class
@include justify-content(flex-start);

.center-$class
@include justify-content(center);

.end-$class
@include justify-content(flex-end);

.around-$class
@include justify-content(space-around);

.between-$class
@include justify-content(space-between);

.top-$class
@include align-items(flex-start);

.middle-$class
@include align-items(center);

.bottom-$class
@include align-items(flex-end);

.self-$class
@include align-self(center);


 I have used mixins Bourbon http://bourbon.io/docs/

     The new syntax is in sync with the current specification (e.g. display: flex).
     The tweener syntax is an unofficial syntax from 2012, adopted only by IE 10 (e.g. display: -ms-flexbox).
     The old syntax is from 2009 (e.g. display: box).

