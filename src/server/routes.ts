import * as express from 'express';

const router = express.Router();

router.get('/api', (req, res, next) => {
    res.json('Hello World');
});

export default router;