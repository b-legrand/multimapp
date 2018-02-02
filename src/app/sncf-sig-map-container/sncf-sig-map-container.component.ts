import { Component, OnInit } from "@angular/core";
import { Log, Level } from "typescript-logger";
import { Logger } from "typescript-logger/build/logger";
import * as Chance from "chance";
import { Output } from "@angular/core";

export const basemaps: string[] = [
  "streets",
  "satellite",
  "hybrid",
  "topo",
  "gray",
  "dark-gray",
  "terrain",
  "osm",
  "dark-gray-vector",
  "gray-vector",
  "streets-vector",
  "topo-vector",
];
/**
 * Options globale d'un conteneur de plusieurs split.
 */
export interface IMapContainer {
  gutterSize?: number;
  width: number;
  height: number;
}

/**
 * Options d'une zone resizable et de la carte qu'elle conttine.
 */
export interface IMapCell {
  id: string;
  present: boolean;
  visible: boolean;
  size?: string | number;
  mapProps?: {
    basemap?: string | __esri.Basemap;
  };
  viewProps?: {
    zoom: number;
    center: number[]
  };
}

@Component({
  selector: "sncf-sig-map-container",
  styleUrls: ["./sncf-sig-map-container.component.css"],
  templateUrl: "./sncf-sig-map-container.component.html"
})
export class SncfSigMapContainerComponent implements OnInit {

  private logger: Logger<{}> = Log.create("Sncf:Sig:Map:Container");

  private chance: Chance.Chance;

  public container: any = {
    gutterSize: "7",
    height: window.innerHeight,
    width: window.innerWidth,
  };

  public mapRows: IMapCell[][] = [
    [ ],
    [ ]
  ];

  public ngOnInit(): void {
    this.logger.debug("init maps");
    // 1ère colonne, 3 cellules, à 33%
    for (const i of [1, 2, 3]) {
      this.mapRows[0].push( this.createRandomMap(33.33) );
    }
    // 2e colonne, 2 cellules à 50% de hauteur.
    for (const i of [1, 2]) {
      this.mapRows[1].push( this.createRandomMap(50) );
    }
  }

  public handleMapLoaded(mapInfo: any): void {
    console.log("map loaded : ");
    return;
  }

  public createRandomMap(size: number): IMapCell {
    // random number generator.
    const chance = new Chance();

    return {
      id: chance.guid(),
      mapProps: {
        basemap: chance.pick(basemaps),
      },
      present: true,
      size,
      viewProps: {
        center: [chance.latitude(), chance.longitude()],
        zoom: chance.integer({ min: 1, max: 12 })
      },
      visible: true,
    } as IMapCell;
  }
}
