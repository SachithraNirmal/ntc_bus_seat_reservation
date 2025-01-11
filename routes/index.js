const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/admin");
const clientCtrl = require("../controllers/client");
const busCtrl = require("../controllers/bus");
const tripCtrl = require("../controllers/trip");
const reservationCtrl = require("../controllers/reservation");

// Middleware
const { protect } = require("../middlewares/adminmiddleware");

/**
 * @swagger
 * /admin:
 *   get:
 *     summary: Retrieve a list of all admins
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: A list of all admins
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: admin@example.com
 *               password:
 *                 type: string
 *                 example: strongpassword
 *     responses:
 *       201:
 *         description: Admin created successfully
 */
router.route("/admin")
    .get(adminCtrl.apiGetAlladmins)
    .post(adminCtrl.apiCreateadmin);

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Authenticate admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@example.com
 *               password:
 *                 type: string
 *                 example: strongpassword
 *     responses:
 *       200:
 *         description: Admin authenticated successfully
 */
router.route("/admin/login").post(adminCtrl.apiCheckadmin);

/**
 * @swagger
 * /admin/{id}:
 *   get:
 *     summary: Retrieve admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the admin
 *     responses:
 *       200:
 *         description: Admin retrieved successfully
 *   put:
 *     summary: Update admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin updated successfully
 *   delete:
 *     summary: Delete admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the admin
 *     responses:
 *       200:
 *         description: Admin deleted successfully
 */
router.route("/admin/:id")
    .get(adminCtrl.apiGetadminById)
    .put(adminCtrl.apiUpdateadmin)
    .delete(adminCtrl.apiDeleteadmin);

/**
 * @swagger
 * /client:
 *   get:
 *     summary: Retrieve a list of all clients
 *     tags: [Client]
 *     responses:
 *       200:
 *         description: A list of all clients
 *   post:
 *     summary: Create a new client
 *     tags: [Client]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *                 example: Jane Doe
 *               email:
 *                 type: string
 *                 example: client@example.com
 *               password:
 *                 type: string
 *                 example: clientpassword
 *     responses:
 *       201:
 *         description: Client created successfully
 */
router.route("/client")
    .get(clientCtrl.apiGetAllclients)
    .post(clientCtrl.apiCreateclient);

/**
 * @swagger
 * /client/login:
 *   post:
 *     summary: Authenticate client
 *     tags: [Client]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: client@example.com
 *               password:
 *                 type: string
 *                 example: clientpassword
 *     responses:
 *       200:
 *         description: Client authenticated successfully
 */
router.route("/client/login").post(clientCtrl.apiCheckclient);

/**
 * @swagger
 * /client/{id}:
 *   get:
 *     summary: Retrieve client by ID
 *     tags: [Client]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the client
 *     responses:
 *       200:
 *         description: Client retrieved successfully
 *   put:
 *     summary: Update client by ID
 *     tags: [Client]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the client
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Client updated successfully
 *   delete:
 *     summary: Delete client by ID
 *     tags: [Client]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the client
 *     responses:
 *       200:
 *         description: Client deleted successfully
 */
router.route("/client/:id")
    .get(clientCtrl.apiGetclientById)
    .put(clientCtrl.apiUpdateclient)
    .delete(clientCtrl.apiDeleteclient);

/**
 * @swagger
 * /bus:
 *   get:
 *     summary: Retrieve a list of all buses
 *     tags: [Bus]
 *     responses:
 *       200:
 *         description: A list of all buses
 *   post:
 *     summary: Create a new bus
 *     tags: [Bus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Bus A
 *               places:
 *                 type: integer
 *                 example: 40
 *               matrql:
 *                 type: string
 *                 example: XYZ1234
 *     responses:
 *       201:
 *         description: Bus created successfully
 */
router.route("/bus")
    .get(busCtrl.apiGetAllbuss)
    .post(busCtrl.apiCreatebus);

/**
 * @swagger
 * /bus/check:
 *   post:
 *     summary: Check availability of a bus
 *     tags: [Bus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Bus A
 *     responses:
 *       200:
 *         description: Bus check successful
 */
router.route("/bus/check").post(busCtrl.apiCheckbus);

/**
 * @swagger
 * /bus/{id}:
 *   get:
 *     summary: Retrieve bus by ID
 *     tags: [Bus]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the bus
 *     responses:
 *       200:
 *         description: Bus retrieved successfully
 *   put:
 *     summary: Update bus by ID
 *     tags: [Bus]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the bus
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               places:
 *                 type: integer
 *               matrql:
 *                 type: string
 *     responses:
 *       200:
 *         description: Bus updated successfully
 *   delete:
 *     summary: Delete bus by ID
 *     tags: [Bus]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the bus
 *     responses:
 *       200:
 *         description: Bus deleted successfully
 */
router.route("/bus/:id")
    .get(busCtrl.apiGetbusById)
    .put(busCtrl.apiUpdatebus)
    .delete(busCtrl.apiDeletebus);

/**
 * @swagger
 * /trip:
 *   get:
 *     summary: Retrieve a list of all trips
 *     tags: [Trip]
 *     responses:
 *       200:
 *         description: A list of all trips
 *   post:
 *     summary: Create a new trip
 *     tags: [Trip]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               depart_city:
 *                 type: string
 *                 example: New York
 *               arrive_city:
 *                 type: string
 *                 example: Boston
 *               depart_date:
 *                 type: string
 *                 example: 2025-01-12
 *               arrive_date:
 *                 type: string
 *                 example: 2025-01-12
 *               price:
 *                 type: number
 *                 example: 100
 *               places:
 *                 type: integer
 *                 example: 40
 *               id_bus:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: 60b8c0f0f6b10f001f8e9d9d
 *     responses:
 *       201:
 *         description: Trip created successfully
 */
router.route("/trip")
    .get(tripCtrl.apiGetAlltrips)
    .post(tripCtrl.apiCreatetrip);

/**
 * @swagger
 * /trip/check:
 *   post:
 *     summary: Check availability of a trip
 *     tags: [Trip]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               trip_name:
 *                 type: string
 *                 example: Morning Route
 *     responses:
 *       200:
 *         description: Trip check successful
 */
router.route("/trip/check").post(tripCtrl.apiChecktrip);

/**
 * @swagger
 * /trip/{id}:
 *   get:
 *     summary: Retrieve trip by ID
 *     tags: [Trip]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the trip
 *     responses:
 *       200:
 *         description: Trip retrieved successfully
 *   put:
 *     summary: Update trip by ID
 *     tags: [Trip]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the trip
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               depart_city:
 *                 type: string
 *                 example: New York
 *               arrive_city:
 *                 type: string
 *                 example: Boston
 *               depart_date:
 *                 type: string
 *                 example: 2025-01-12
 *               arrive_date:
 *                 type: string
 *                 example: 2025-01-12
 *               price:
 *                 type: number
 *                 example: 100
 *               places:
 *                 type: integer
 *                 example: 40
 *     responses:
 *       200:
 *         description: Trip updated successfully
 *   delete:
 *     summary: Delete trip by ID
 *     tags: [Trip]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the trip
 *     responses:
 *       200:
 *         description: Trip deleted successfully
 */
router.route("/trip/:id")
    .get(tripCtrl.apiGettripById)
    .put(tripCtrl.apiUpdatetrip)
    .delete(tripCtrl.apiDeletetrip);

/**
 * @swagger
 * /reservation:
 *   get:
 *     summary: Retrieve a list of all reservations
 *     tags: [Reservation]
 *     responses:
 *       200:
 *         description: A list of all reservations
 *   post:
 *     summary: Create a new reservation
 *     tags: [Reservation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               client_id:
 *                 type: string
 *                 example: 60b8c0f0f6b10f001f8e9d9a
 *               trip_id:
 *                 type: string
 *                 example: 60b8c0f0f6b10f001f8e9d9b
 *               bus_id:
 *                 type: string
 *                 example: 60b8c0f0f6b10f001f8e9d9c
 *     responses:
 *       201:
 *         description: Reservation created successfully
 */
router.route("/reservation")
    .get(reservationCtrl.apiGetAllreservations)
    .post(reservationCtrl.apiCreatereservation);

/**
 * @swagger
 * /reservation/check:
 *   post:
 *     summary: Check reservation availability
 *     tags: [Reservation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reservation_id:
 *                 type: string
 *                 example: 60b8c0f0f6b10f001f8e9d9d
 *     responses:
 *       200:
 *         description: Reservation check successful
 */
router.route("/reservation/check").post(reservationCtrl.apiCheckreservation);

/**
 * @swagger
 * /reservation/{id}:
 *   get:
 *     summary: Retrieve reservation by ID
 *     tags: [Reservation]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the reservation
 *     responses:
 *       200:
 *         description: Reservation retrieved successfully
 *   put:
 *     summary: Update reservation by ID
 *     tags: [Reservation]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the reservation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: confirmed
 *     responses:
 *       200:
 *         description: Reservation updated successfully
 *   delete:
 *     summary: Delete reservation by ID
 *     tags: [Reservation]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the reservation
 *     responses:
 *       200:
 *         description: Reservation deleted successfully
 */
router.route("/reservation/:id")
    .get(reservationCtrl.apiGetreservationById)
    .put(reservationCtrl.apiUpdatereservation)
    .delete(reservationCtrl.apiDeletereservation);

/**
 * @swagger
 * /reservation/owner/{id}:
 *   get:
 *     summary: Retrieve reservation by client owner ID
 *     tags: [Reservation]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID who owns the reservation
 *     responses:
 *       200:
 *         description: Reservation retrieved by owner successfully
 */
router.route("/reservation/owner/:id").get(reservationCtrl.apiGetreservationByIdOwner);

module.exports = router;
