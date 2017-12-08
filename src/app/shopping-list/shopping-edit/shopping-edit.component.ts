import {Component, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm
  subscription: Subscription;
  editedIndex: number;
  editMode = false;
  editIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedIndex = index;
          this.editIngredient = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            name:this.editIngredient.name,
            amount: this.editIngredient.amount
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    if(!this.editMode){
      this.shoppingListService.addIngredient(new Ingredient(value.name, value.amount));
    } else{
      this.shoppingListService.updateIngredient(this.editedIndex,new Ingredient(value.name, value.amount));
    }
    form.reset();
    this.editMode = false;
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;  
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedIndex);
    this.onClear();
  }

  onDestroy(){
    this.subscription.unsubscribe();
  }
}
