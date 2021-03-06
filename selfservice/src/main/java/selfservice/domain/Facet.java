/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package selfservice.domain;

import java.util.Locale;
import java.util.SortedSet;
import java.util.TreeSet;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.apache.commons.lang3.builder.CompareToBuilder;
import org.hibernate.annotations.Proxy;
import org.hibernate.annotations.SortNatural;

import selfservice.util.DomainObject;

@SuppressWarnings("serial")
@Entity
@Proxy(lazy = false)
public class Facet extends DomainObject implements Comparable<Facet> {

  @OneToMany(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER, mappedBy = "facet")
  @SortNatural
  private SortedSet<FacetValue> facetValues = new TreeSet<>();

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "parent")
  @SortNatural
  private SortedSet<Facet> children = new TreeSet<>();

  @ManyToOne
  @JoinColumn(name = "facet_parent_id", nullable = true)
  private Facet parent;

  @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @JoinColumn(name = "multilingual_string_id", nullable = false)
  private MultilingualString multilingualString = new MultilingualString();

  public String getName() {
    return multilingualString.getValue();
  }

  public String getLocaleName(String locale) {
    return multilingualString.getLocaleValue(locale);
  }

  public void setName(String name) {
    this.multilingualString.setValue(name);
  }

  public void addName(Locale locale, String name) {
    this.multilingualString.addValue(locale, name);
  }

  public MultilingualString getMultilingualString() {
    return multilingualString;
  }

  public void setMultilingualString(MultilingualString multilingualString) {
    this.multilingualString = multilingualString;
  }

  public SortedSet<FacetValue> getFacetValues() {
    return facetValues;
  }

  public void setFacetValues(SortedSet<FacetValue> facetValues) {
    facetValues.forEach(fv -> fv.setFacet(this));
    this.facetValues = facetValues;
  }

  public void addFacetValue(FacetValue facetValue) {
    this.facetValues.add(facetValue);
    facetValue.setFacet(this);
  }

  public void removeFacetValue(FacetValue facetValue) {
    this.facetValues.remove(facetValue);
    facetValue.setFacet(null);
  }

  public SortedSet<Facet> getChildren() {
    return children;
  }

  public void setChildren(SortedSet<Facet> children) {
    this.children = children;
  }

  public void addChild(Facet facet) {
    this.children.add(facet);
    facet.setParent(this);
  }

  public void removeChild(Facet facet) {
    this.children.remove(facet);
    facet.setParent(null);
  }

  public Facet getParent() {
    return parent;
  }

  public void setParent(Facet parent) {
    this.parent = parent;
  }

  @JsonIgnore
  public boolean isUsedFacetValues() {
    for (FacetValue facetValue : facetValues) {
      if (facetValue.getCount() > 0) {
        return true;
      }
    }
    return false;
  }

  @Override
  public int compareTo(Facet that) {
    return new CompareToBuilder()
      .append(this.getName(), that.getName())
      .toComparison();
  }

  public static FacetBuilder builder() {
    return new FacetBuilder();
  }

  public static class FacetBuilder {
    private SortedSet<FacetValue> facetValues = new TreeSet<>();
    private String name;

    public FacetBuilder addFacetValue(FacetValue value) {
      this.facetValues.add(value);
      return this;
    }

    public FacetBuilder name(String name) {
      this.name = name;
      return this;
    }

    public Facet build() {
      Facet facet = new Facet();
      facet.setName(name);
      facet.setFacetValues(facetValues);
      return facet;
    }
  }
}
