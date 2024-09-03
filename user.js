// models/User.js
// Création d'un modéle Mongoose
const mongoose = require('mongoose');

// Définir le schéma pour un utilisateur
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

// Créer le modèle basé sur le schéma
const User = mongoose.model('User', userSchema);

module.exports = User;
