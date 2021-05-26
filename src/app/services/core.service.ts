import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase';
import firestore = firebase.firestore;
import {UserBoardModal} from '../user';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private angularFirestore: AngularFirestore) { }

  saveBoard(userId: string, board: UserBoardModal) {
    return this.angularFirestore.doc(`users/${userId}`).update({
      [`board`]: board
    });
  }

  addNewTask(userId, task) {
    return this.angularFirestore.doc(`users/${userId}`).update({
      [`board.todo`]: firestore.FieldValue.arrayUnion(task)
    });
  }

  removeTask(userId, taskColumn, task) {
    return this.angularFirestore.doc(`users/${userId}`).update({
      [`board.${taskColumn}`]: firestore.FieldValue.arrayRemove(task)
    });
  }


}
