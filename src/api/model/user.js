export class User {
  constructor(ci, email,password, name, lastName, birthdate, phone, photo, role) {
      this.uid = '';
      this.email = email;
      this.password = password;
      this.personalData = new PersonalData(this.uid, ci, name, lastName, birthdate, phone, photo, role);
  }
}
export class PersonalData {
  constructor(uid,ci, name, lastName, birthdate, phone, photo, role){
      this.uid = uid;
      this.name = name;
      this.lastName = lastName;
      this.birthdate = birthdate;
      this.phone = phone;
      this.photo = photo;
      this.role = role;
      this.ci = ci;
  }
}
export const Role = {
  ADMIN: 'ADMIN'
}