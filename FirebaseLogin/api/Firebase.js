import firebase from 'firebase';

class Firebase {

  userLogin = (email, password) => new Promise(resolve => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('Invalid email address format.');
              break;
            case 'auth/user-not-found':
            case 'auth/wrong-password':
              alert('Invalid email address or password');
              break;
            default:
              alert('Check your internet connection');
          }
          resolve(null);
        }).then(user => {
        if (user) {
          resolve(user);
        }
      });
    });

  createFirebaseAccount = (name, email, password) => new Promise(resolve => {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('This email address is already taken');
            break;
          case 'auth/invalid-email':
            alert('Invalid e-mail address format');
            break;
          case 'auth/weak-password':
            alert('Password is too weak');
            break;
          default:
            alert('Check your internet connection');
        }
        resolve(false);
      }).then(info => {
        if (info) {
          firebase.auth().currentUser.updateProfile({
            displayName: name
          });
          resolve(true);
        }
      });
    });

  sendEmailWithPassword = (email) => new Promise(resolve => {
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          alert('Email with new password has been sent');
          resolve(true);
        }).catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('Invalid email address format');
              break;
            case 'auth/user-not-found':
              alert('User with this email does not exist');
              break;
            default:
              alert('Check your internet connection');
          }
          resolve(false);
        });
    });

}

export default new Firebase();
