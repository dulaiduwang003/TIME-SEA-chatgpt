package com.cn.bdth.model;

import lombok.Data;


@Data
public class LocationHintsModel {

    private final String country;

    private final String state;

    private final String city;

    private final String zipcode;

    private final int timezoneoffset;

    private final int countryConfidence;

    private final int cityConfidence;

    private final LocationModel Center;

    private final int RegionType = 2;

    private final int SourceType = 1;


}
