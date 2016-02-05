
/**
 * @fileOverview Emove.js
 * @author xuguanlong
 */

import Emove from './Emove.core';
import Path from './shapes/path';
import Arc from './shapes/arc';
import Circle from './shapes/circle';
import Ellipse from './shapes/ellipse';
import Image from './shapes/image';
import Polygon from './shapes/polygon';
import Rectangle from './shapes/rectangle';
import Text from './shapes/text';

Emove['Path'] = Path;
Emove['Arc'] = Arc;
Emove['Circle'] = Circle;
Emove['Ellipse'] = Ellipse;
Emove['Image'] = Image;
Emove['Polygon'] = Polygon;
Emove['Rectangle'] = Rectangle;
Emove['Text'] = Text;

window.Emove = Emove;