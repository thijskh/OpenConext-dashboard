/*
 * Copyright 2012 SURFnet bv, The Netherlands
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package nl.surfnet.coin.selfservice.domain;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;

import nl.surfnet.coin.shared.domain.DomainObject;

/**
 * Field.java
 * 
 */
@SuppressWarnings("serial")
@MappedSuperclass
public abstract class Field extends DomainObject {

  @Column(name = "field_source")
  private Source source;

  @Column(name = "field_key")
  private Key key;

  @ManyToOne
  @JoinColumn(name = "compound_service_provider_id", nullable = false)
  private CompoundServiceProvider compoundServiceProvider;

  public Field() {
    super();
  }

  public Field(Source source, Key key, CompoundServiceProvider compoundServiceProvider) {
    super();
    this.source = source;
    this.key = key;
    this.compoundServiceProvider = compoundServiceProvider;
  }

  public enum Source {
    LMNG, SURFCONEXT, DISTRIBUTIONCHANNEL
  }

  public enum Key {
    APPSTORE_LOGO,

    APP_URL,

    DETAIL_LOGO,

    ENDUSER_DESCRIPTION_EN,

    ENDUSER_DESCRIPTION_NL,

    EULA_URL,

    INSTITUTION_DESCRIPTION_EN,

    INSTITUTION_DESCRIPTION_NL,
 
    SERVICE_DESCRIPTION_EN,

    SERVICE_DESCRIPTION_NL,

    SCREENSHOT,

    SERVICE_URL,

    SUPPORT_MAIL,

    SUPPORT_URL,

    TECHNICAL_SUPPORTMAIL
    
  }

  public Source getSource() {
    return source;
  }

  public void setSource(Source source) {
    this.source = source;
  }

  public Key getKey() {
    return key;
  }

  public void setKey(Key key) {
    this.key = key;
  }

  public CompoundServiceProvider getCompoundServiceProvider() {
    return compoundServiceProvider;
  }

  public void setCompoundServiceProvider(CompoundServiceProvider compoundServiceProvider) {
    this.compoundServiceProvider = compoundServiceProvider;
  }
}