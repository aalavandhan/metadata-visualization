angular.module('metadataVisualizationApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/components/document/template.html',
    "<div class=\"document\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h3 class=\"text-center\">\n" +
    "        <span data-ng-bind=\"document.displayType() | uppercase\"></span>\n" +
    "        <span data-ng-if=\"document.isJournal()\">[Journal]</span>\n" +
    "      </h3>\n" +
    "      <br />\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "\n" +
    "      <table class=\"table table-striped\">\n" +
    "        <tr><th>Document Object Identifier:</th> <td><a href=\"{{document.doi}}\">{{document.id}}</a></td></tr>\n" +
    "        <tr><th>Journal Title:</th> <td>{{ document.journal['header-title'] || '-' }}</td></tr>\n" +
    "        <tr><th>Document Title:</th> <td>{{ document.journal.tile || '-' }}</td></tr>\n" +
    "        <tr><th>Abstract</th> <td>{{ ( document.journal.abstract || '-' ) }}</td></tr>\n" +
    "        <tr><th>Authors:</th> <td>{{ document.getAuthors().join(\",\") || '-' }}</td></tr>\n" +
    "        <tr><th>Affiliations:</th> <td>{{ document.getAffiliations().join(\",\") || '-' }}</td></tr>\n" +
    "        <tr><th>Meta-Authors:</th> <td>{{ document.journal['header-author'] || '-' }}</td></tr>\n" +
    "        <tr><th>Foot-Note:</th> <td>{{ document.journal['header-author'] || '-' }}</td></tr>\n" +
    "        <tr><th>Date:</th> <td>{{ document.journal['date-type'] }} {{ document.journal['date'] || '-' }}</td></tr>\n" +
    "        <tr><th>File created time:</th> <td>{{ document.journal['created-time'] || '-' }}</td></tr>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-4\" data-ng-if=\"document.isEntityPresent('sweet')\" class=\"tags-container\">\n" +
    "      <h4>Sweet Entities</h4>\n" +
    "      <div>\n" +
    "        <span data-ng-repeat=\"e in document.getEntities('sweet')\">\n" +
    "          <span class=\"label label-default\" data-ng-bind=\"e\"></span>&nbsp;\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div  data-ng-if=\"document.isEntityPresent('LOCATION')\" class=\"tags-container\">\n" +
    "        <h4>Locations</h4>\n" +
    "        <div>\n" +
    "          <span data-ng-repeat=\"e in document.getEntities('LOCATION')\">\n" +
    "            <span class=\"label label-default\" data-ng-bind=\"e\"></span>&nbsp;\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div data-ng-if=\"document.isEntityPresent('ORGANIZATION')\" class=\"tags-container\">\n" +
    "        <h4>Organizations</h4>\n" +
    "        <div>\n" +
    "          <span data-ng-repeat=\"e in document.getEntities('ORGANIZATION')\">\n" +
    "            <span class=\"label label-default\" data-ng-bind=\"e\"></span>&nbsp;\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div data-ng-if=\"document.isEntityPresent('PERSION')\" class=\"tags-container\">\n" +
    "        <h4>Person</h4>\n" +
    "        <div>\n" +
    "          <span data-ng-repeat=\"e in document.getEntities('PERSION')\">\n" +
    "            <span class=\"label label-default\" data-ng-bind=\"e\"></span>&nbsp;\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div data-ng-if=\"document.isEntityPresent('DATE')\" class=\"tags-container\">\n" +
    "        <h4>Date</h4>\n" +
    "        <div>\n" +
    "          <span data-ng-repeat=\"e in document.getEntities('DATE')\">\n" +
    "            <span class=\"label label-default\" data-ng-bind=\"e\"></span>&nbsp;\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div data-ng-if=\"document.isEntityPresent('TIME')\" class=\"tags-container\">\n" +
    "        <h4>Time</h4>\n" +
    "        <div>\n" +
    "          <span data-ng-repeat=\"e in document.getEntities('TIME')\">\n" +
    "            <span class=\"label label-default\" data-ng-bind=\"e\"></span>&nbsp;\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div data-ng-if=\"document.isEntityPresent('MONEY')\" class=\"tags-container\">\n" +
    "        <h4>Money</h4>\n" +
    "        <div>\n" +
    "          <span data-ng-repeat=\"e in document.getEntities('MONEY')\">\n" +
    "            <span class=\"label label-default\" data-ng-bind=\"e\"></span>&nbsp;\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div data-ng-if=\"document.isEntityPresent('emails') || document.isEntityPresent('phones') || document.isEntityPresent('urls')\" class=\"tags-container\">\n" +
    "        <h4>Misc</h4>\n" +
    "        <div>\n" +
    "          <span data-ng-repeat=\"e in document.getEntities('emails')\">\n" +
    "            <span class=\"label label-default\" data-ng-bind=\"e\"></span>&nbsp;\n" +
    "          </span>\n" +
    "          <span data-ng-repeat=\"e in document.getEntities('phones')\">\n" +
    "            <span class=\"label label-default\" data-ng-bind=\"e\"></span>&nbsp;\n" +
    "          </span>\n" +
    "          <span data-ng-repeat=\"e in document.getEntities('urls')\">\n" +
    "            <span class=\"label label-default\" data-ng-bind=\"e\"></span>&nbsp;\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\" data-ng-if=\"document.geo.length > 0\">\n" +
    "    <hr />\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <leaflet markers=\"map.markers\" height=\"480px\" width=\"100%\"></leaflet>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <div data-ng-if=\"document.journal && document.journal['related-publications'].length > 0\">\n" +
    "    <hr />\n" +
    "    <h4>References</h4>\n" +
    "    <ul>\n" +
    "      <li data-ng-repeat=\"r in document.journal['related-publications']\">\n" +
    "        <p>\n" +
    "          <a href=\"{{r.URL}}\">{{ r.title }}</a> <br/>\n" +
    "          {{ r.abstract }}\n" +
    "        </p>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/document_list/template.html',
    "<div>\n" +
    "  <div class=\"document-container\" infinite-scroll=\"loadDocuments()\">\n" +
    "    <div data-ng-repeat=\"d in documents\"\n" +
    "         class=\"document-list\"\n" +
    "         data-ng-click=\"openDocument(d)\">\n" +
    "\n" +
    "      <div class=\"header\">\n" +
    "        <p>\n" +
    "          <span data-ng-bind=\"d.displayType() | uppercase\"></span>\n" +
    "          <span data-ng-if=\"d.isJournal()\">[Journal]</span>\n" +
    "        </p>\n" +
    "        <a href=\"{{d.doi}}\">{{d.id}}</a>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"body\">\n" +
    "        <p><b>Journal Title:</b> {{ d.journal['header-title'] || '-' }}</p>\n" +
    "        <p><b>Docment Title:</b> {{ d.journal.tile || '-' }}</p>\n" +
    "        <p><b>Abstract</b> {{ ( d.journal.abstract || '-' ) | limitTo:100 }}</p>\n" +
    "        <p><b>Authors:</b> {{ d.getAuthors().join(\",\") || '-' | limitTo:100 }}</p>\n" +
    "        <p><b>Affiliations:</b> {{ d.getAffiliations().join(\",\") || '-' | limitTo:100 }}</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/filters/doc_type_template.html',
    "<div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label>Document Type</label>\n" +
    "\n" +
    "    <select class=\"form-control\" data-ng-model=\"docType\" data-ng-init=\"docType = 'application-pdf'\">\n" +
    "      <option value='application-pdf'>application/pdf</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/filters/entity_template.html',
    "<div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label>Entity</label>\n" +
    "\n" +
    "    <select class=\"form-control\" data-ng-model=\"entity\" data-ng-init=\"entity = 'LOCATION'\">\n" +
    "      <option value='sweet'>sweet</option>\n" +
    "      <option value='LOCATION'>LOCATION</option>\n" +
    "      <option value='geo'>geo</option>\n" +
    "      <option value='DATE'>DATE</option>\n" +
    "      <option value='TIME'>TIME</option>\n" +
    "      <option value='ORGANIZATION'>ORGANIZATION</option>\n" +
    "      <option value='PERSON'>PERSON</option>\n" +
    "      <option value='PERCENT'>PERCENT</option>\n" +
    "      <option value='MONEY'>MONEY</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/filters/magnification_template.html',
    "<div>\n" +
    "  <div class=\"form-group\" data-ng-init=\"magnification={ value: 0 }\">\n" +
    "    <label>Magnification ( {{ magnification.value }}x ): </label>\n" +
    "\n" +
    "    <div class=\"form-slider\">\n" +
    "      <div ui-slider min=\"0\" max=\"5\" step=\"0.5\" ng-model=\"magnification.value\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/flash/template.html',
    "<div>\n" +
    "  <div class=\"c-alert c-{{flashConfig.type || 'info'}}\" data-ng-if=\"(flashConfig && !closeFlash)\">\n" +
    "    <span class=\"glyphicon c-{{flashConfig.type || 'info'}}-icon\"></span>\n" +
    "    <span class=\"body\" data-ng-bind=\"flashConfig.message\"></span>\n" +
    "    <button type=\"button\" class=\"close\" data-ng-click=\"close()\" aria-hidden=\"true\">&times;</button>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/geographic_distribution/template.html',
    "<div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-8\">\n" +
    "      <leaflet lf-center=\"map.center\"\n" +
    "               lf-draw=\"map.drawOptions\" height=\"480px\" width=\"100%\">\n" +
    "      </leaflet>\n" +
    "\n" +
    "      <hr />\n" +
    "\n" +
    "      <table class=\"table table-striped\" data-ng-show=\"regions.length > 0\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>Regions</th>\n" +
    "            <th>Coordinates</th>\n" +
    "            <th></th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "\n" +
    "        <tbody>\n" +
    "          <tr data-ng-repeat=\"r in regions\">\n" +
    "            <td data-ng-bind=\"r.name\"></td>\n" +
    "            <td>\n" +
    "              <div data-ng-repeat=\"c in r.coords\" data-ng-bind=\"c\"></div>\n" +
    "            </td>\n" +
    "            <td class=\"cursor text-danger\" data-ng-click=\"removeRegion($index)\"><i class=\"fa fa-times\"></i></td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <nvd3 options=\"options\" data=\"data\"></nvd3>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/tag_cloud/template.html',
    "<div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <div class=\"form-group\" data-ng-init=\"countType='doc'\">\n" +
    "        <label>Aggregation Type</label>\n" +
    "\n" +
    "        <div class=\"radio\">\n" +
    "          <label>\n" +
    "            <input type=\"radio\" name=\"countType\" value=\"doc\" data-ng-model=\"countType\" />Document Count &nbsp;\n" +
    "          </label>\n" +
    "          <label>\n" +
    "            <input type=\"radio\" name=\"countType\" value=\"occurrence\" data-ng-model=\"countType\" />Occurrence count &nbsp;\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <div class=\"form-group\" data-ng-init=\"tokenization='raw'\">\n" +
    "        <label>Raw vs Tokenized</label>\n" +
    "\n" +
    "        <div class=\"radio\">\n" +
    "          <label>\n" +
    "            <input type=\"radio\" name=\"tokenization\" value=\"raw\" data-ng-model=\"tokenization\" />Raw &nbsp;\n" +
    "          </label>\n" +
    "          <label>\n" +
    "            <input type=\"radio\" name=\"tokenization\" value=\"token\" data-ng-model=\"tokenization\" />Tokenized &nbsp;\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label>Zoom Level</label>\n" +
    "\n" +
    "        <select data-ng-model=\"zoomLevel\" >\n" +
    "\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <button class=\"btn btn-primary pull-right\"\n" +
    "                data-ng-click=\"loadEntities()\"\n" +
    "                data-ng-disabled=\"state.isWorking\">Refresh Tag Cloud</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <div class=\"tag-cloud\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/time_variance/template.html',
    "<div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-4\" data-ng-repeat=\"q in queries\">\n" +
    "      <div class=\"col-md-9\">\n" +
    "        <tags-input ng-model=\"q.tags\" add-on-paste=\"true\" select-first-match=\"false\">\n" +
    "          <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "        </tags-input>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-1\" style=\"padding-top: 10px;text-align: left;\">\n" +
    "        <i class=\"fa fa-times cursor\" data-ng-click=\"removeQuery($index)\"></i>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-2\" data-ng-show=\"$index != queries.length - 1\">\n" +
    "        <div class=\"form-group\" style=\"padding-top: 10px;\">\n" +
    "          <label>( AND )</label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-3 col-md-offset-9\">\n" +
    "      <div class=\"form-group pull-right\" style=\"padding-top: 5px;\">\n" +
    "        <button class=\"btn btn-md btn-warning\"\n" +
    "                data-ng-click=\"addQuery()\"\n" +
    "                data-ng-disabled=\"state.isWorking\"> Add Filter </button>&nbsp;&nbsp;\n" +
    "        <button class=\"btn btn-md btn-primary\"\n" +
    "                data-ng-click=\"executeQuery()\"\n" +
    "                data-ng-disabled=\"state.isWorking\"> Query </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <hr />\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <nvd3 options=\"options\" data=\"data\"></nvd3>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/year_map/template.html',
    "<div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label>Year: {{ year.value }}</label>\n" +
    "        <div ui-slider=\"{ stop: sliderStop,  disabled: state.isWorking }\"  min=\"1950\" max=\"2050\" ng-model=\"year.value\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-4  col-md-offset-4\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label>Size: {{ size.value }}</label>\n" +
    "        <div ui-slider=\"{ stop: sliderStop,  disabled: state.isWorking }\"  min=\"1\" max=\"1000\" ng-model=\"size.value\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <hr />\n" +
    "\n" +
    "  <div class=\"row\" data-ng-init=\"map={}\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <leaflet lf-center=\"center\"  layers=\"layers\"  markers=\"map.markers\" event-broadcast=\"events\" height=\"680px\" width=\"100%\"></leaflet>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/sections/home/about.html',
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <h3>Team Members</h3>\n" +
    "    <hr />\n" +
    "    <ul>\n" +
    "      <li><a href=\"https://www.linkedin.com/in/zackwinoker\">Zach Winoker</a></li>\n" +
    "      <li><a href=\"https://www.linkedin.com/in/ajaykumar6\">Ajay Kumar</a></li>\n" +
    "      <li><a href=\"https://github.com/nithinkrishna\">Nithin Krishna</a></li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/sections/home/document.html',
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <div c-document data-doc-type=\"params.type\" data-id=\"params.id\"></div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/sections/home/index.html',
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-4\">\n" +
    "\n" +
    "    <a href=\"#/visualizations/tag_cloud\">\n" +
    "      <div class=\"tile hvr-float\">\n" +
    "        <div class=\"big-icon\">\n" +
    "          <i class=\"fa fa-mixcloud\"></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <p>\n" +
    "          <b>Tag Cloud</b>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-md-4\">\n" +
    "\n" +
    "    <a href=\"#/visualizations/time_dependence\">\n" +
    "      <div class=\"tile hvr-float\">\n" +
    "        <div class=\"big-icon\">\n" +
    "          <i class=\"fa fa-line-chart\"></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <p>\n" +
    "          <b>Document count distribution over time</b>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-md-4\">\n" +
    "\n" +
    "    <a href=\"#/visualizations/year_map\">\n" +
    "      <div class=\"tile hvr-float\">\n" +
    "        <div class=\"big-icon\">\n" +
    "          <i class=\"fa fa-map-marker\"></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <p>\n" +
    "          <b>Time variant maps</b>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-md-4\">\n" +
    "\n" +
    "    <a href=\"#/visualizations/geo_pie\">\n" +
    "      <div class=\"tile hvr-float\">\n" +
    "        <div class=\"big-icon\">\n" +
    "          <i class=\"fa fa-map-marker\"></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <p>\n" +
    "          <b>Document count distribution over space</b>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- <hr /> -->\n" +
    "\n" +
    "<!-- <div class=\"row\">\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <div c-document-list data-doc-type=\"'application-pdf'\" data-query=\"{ }\"></div>\n" +
    "    <div c-tag-cloud data-doc-type=\"'application-pdf'\" data-entity=\"'DATE'\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    " -->\n"
  );


  $templateCache.put('app/scripts/sections/visualizations/geo_pie.html',
    "<div\n" +
    "<div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <div c-geo-dist></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/sections/visualizations/tag_cloud.html',
    "<div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div c-doc-type-filter data-doc-type=\"docType\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div c-entity-filter data-entity=\"entity\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <div c-tag-cloud data-doc-type=\"docType\" data-entity=\"entity\" data-magnification=\"magnification.value\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/sections/visualizations/time_dependence.html',
    "<div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <div c-time-variance></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/sections/visualizations/year_map.html',
    "<div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <div c-year-map></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/util/templates/global_loader.html',
    "<div>\n" +
    "  <div class=\"c-global-loader\" data-ng-if=\"loaderConfig\">\n" +
    "    <span data-ng-bind=\"loaderConfig.message\"></span>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
