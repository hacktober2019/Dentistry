const router = require('express').Router();

const {patientController} = require('../../controllers');

router.post('/',  patientController.createPatient);
router.post('/reception', patientController.receptionPatient);

module.exports = router;
