import { inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class CreateUserFormController {
    
    createUserForm!: FormGroup;
    private readonly _fb = inject(FormBuilder);

    constructor() {
        this.createUserForm = this._fb.group({
            name: this._fb.control(""),
            account: this._fb.group({
                id: this._fb.control(""),
                number: this._fb.control(""),
                agency: this._fb.control(""),
                balance: this._fb.control(""),
                limit: this._fb.control(""),
            }),
            card: this._fb.group({
                id: this._fb.control(""),
                number: this._fb.control(""),
                limit: this._fb.control(""),
            }),
            features: this._fb.array([
                this._fb.group({
                    id: this._fb.control(""),
                    icon: this._fb.control(""),
                    description: this._fb.control(""),
                })
            ]),
            news: this._fb.array([
                this._fb.group({
                    id: this._fb.control(""),
                    icon: this._fb.control(""),
                    description: this._fb.control(""),
                })
            ]),
        })
    }

    get name(): FormControl {
        return this.createUserForm.get("name") as FormControl;
    }

    get account(): FormGroup {
        return this.createUserForm.get("account") as FormGroup;
    }

    get accountId(): FormControl {
        return this.createUserForm.get("account")?.get("id") as FormControl;
    }

    get accountNumber(): FormControl {
        return this.createUserForm.get("account")?.get("number") as FormControl;
    }

    get agency(): FormControl {
        return this.createUserForm.get("account.agency") as FormControl;
    }

    get balance(): FormControl {
        return this.createUserForm.get("account")?.get("balance") as FormControl;
    }
}