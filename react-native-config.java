package com.myapp2;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import com.learnium.RNDeviceInfo.RNDeviceInfo;

public class MainApplication extends Application implements ReactApplication {
    @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                new RNDeviceInfo(),
                new MainReactPackage()
      );
    }
}