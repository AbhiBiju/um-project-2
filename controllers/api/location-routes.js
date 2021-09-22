const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Location} = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/', withAuth, (req, res) => {
    console.log('======================');
    Location.findAll({
    attributes: [
        'id',
        'latitude',
        'longitude',
        'user_id'
    ],
    include: [
        {
            model: User,
        }
    ]
    })
    .then(dbLocationData => res.json(dbLocationData))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

router.get('/:id', withAuth, (req, res) => {
    console.log('======================');
    Location.findAll({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'latitude',
            'longitude',
            'user_id'
        ],
        include: [
            {
                model: User,
            }
        ]
    })
    .then(dbLocationData => res.json(dbLocationData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
    
router.post('/', withAuth, (req, res) => {
    console.log('Success');
    Location.create({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        user_id: req.session.user_id,            
    })
    .then(dbLocationData => res.json(dbLocationData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/:id', withAuth, (req, res) => {
    console.log('Successful');
    Location.update({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        user_id: req.session.user_id,            
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbLocationData => res.json(dbLocationData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;