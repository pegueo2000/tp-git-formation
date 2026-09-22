function login(username, password) {
  if (!username || !password) {
    console.log("Erreur : identifiants manquants");
    return false;
  }
  console.log("Connexion réussie pour " + username);
  return true;
}
