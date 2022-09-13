import React, { useState, useEffect, useRef } from "react";
import LabelStudio from "@heartexlabs/label-studio";
import "@heartexlabs/label-studio/build/static/css/main.css";


const LabelStudioWrapper = (props) => {

    const rootRef = useRef();
    const lsfRef = useRef();
  
    const [labeltry, setLabeltry] = useState();
    const [path, setPath] = useState();

    useEffect(() => {
      if (typeof labeltry === "undefined") {
        setLabeltry("Passaro");
      }
      if (typeof path === "undefined") {
        setPath(
          "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg"
        );
      }
      if (rootRef.current) {
        lsfRef.current = new LabelStudio(rootRef.current, {

          config:
            `
        <View>
          <Image name="img" value="$image"></Image>
          <RectangleLabels name="tag" toName="img">
            <Label value="` +
            labeltry +
            `"></Label>
            <Label value="World"></Label>
          </RectangleLabels>
          <PolygonLabels name="label" toName="img"
          strokeWidth="1" pointSize="small"
          opacity="0.9">
            <Label value="test1" background="red"/>
            <Label value="test2" background="blue"/>
            </PolygonLabels>
        </View>
      `,
  
          interfaces: [
            "panel",
            "update",
            "submit",
            "skip",
            "controls",
            "infobar",
            "topbar",
            "instruction",
            "side-column",
            "annotations:history",
            "annotations:tabs",
            "annotations:menu",
            "annotations:current",
            "annotations:add-new",
            "annotations:delete",
            'annotations:view-all',
            "predictions:tabs",
            "predictions:menu",
            "auto-annotation",
            "edit-history",
          ],
  
          user: {
            pk: 1,
            firstName: "Nelson",
            lastName: "Nunes"
          },
  
          task: {
            annotations: [],
            predictions: [],
            id: 1,
            data: {
              image: path
            }
          },
  
          onLabelStudioLoad: function (ls) {
            var c = ls.annotationStore.addAnnotation({
              userGenerate: true
            });
            ls.annotationStore.selectAnnotation(c.id);
          },
          onSubmitAnnotation: function (ls, annotation) {
            console.log(annotation.serializeAnnotation());
            setLabeltry("Leão");
            setPath(
              "https://i.pinimg.com/originals/1e/06/e1/1e06e107f0ca520aed316957b685ef5c.jpg"
            );
            console.log(labeltry);
          }
        });
      }
    }, [labeltry, path]);
    // just a wrapper node to place LSF into
    return <div className="label-studio-root" ref={rootRef}></div>;
  };
  
  
export default function App() {
  return (
    <div className="App">
      <LabelStudioWrapper />
    </div>
  );
}

