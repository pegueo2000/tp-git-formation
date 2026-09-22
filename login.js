function login(email, password) {
  if (!email || !password) {
    console.log("Erreur : identifiants manquants");
    return false;
  }
  console.log("Connexion réussie pour " + email);
  return true;
}
