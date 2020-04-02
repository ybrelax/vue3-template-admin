import router from '@/router';

import beforEach from "./before";
import afterEach from "./after";

router.beforeEach(beforEach);
router.afterEach(afterEach);
