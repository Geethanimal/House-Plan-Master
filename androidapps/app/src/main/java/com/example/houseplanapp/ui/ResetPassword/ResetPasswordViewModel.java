package com.example.houseplanapp.ui.ResetPassword;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

public class ResetPasswordViewModel extends ViewModel {

    private final MutableLiveData<String> mText;

    public ResetPasswordViewModel() {
        mText = new MutableLiveData<>();
        mText.setValue("This is slideshow fragment");
    }

    public LiveData<String> getText() {
        return mText;
    }
}