import Image from "next/image";

import BrushTool from "../../public/flow-tools/brush.svg";
import CrossTool from "../../public/flow-tools/cross.svg";
import UploadTool from "../../public/flow-tools/upload.svg";
import Flow from "../../public/Flow.svg";
import Click from "../../public/flowImages/click.svg";
import DesignSystem from "../../public/flowImages/design-system.svg";
import Devices from "../../public/flowImages/devices.svg";
import Files from "../../public/flowImages/files.svg";
import GradientLeaf from "../../public/flowImages/gradientleaf.svg";
import Landscape from "../../public/flowImages/landscape.svg";
import Modernnft from "../../public/flowImages/modernft.svg";
import PaintBrush from "../../public/flowImages/paint.svg";
import Texticon from "../../public/flowImages/text.svg";
import Leaf from "../../public/leaf.svg";
import styles from "../../styles/imagination-flow.module.scss";
import ArrowRight from "../Icons/arrow-right";
import ArrowTopRight from "../Icons/arrow-top-right";

function ImaginationFlow() {
  return (
    <div className={styles.main_flow_area}>
      <div className={styles.inner_flow_area}>
        <h5 className={styles.main_line}>01. Design</h5>
        <h1 className={styles.main_head}>Let your imagination flow</h1>
        <h5 className={styles.desc}>
          Paint the future of the web in the colours of your imagination and
          creativity, and thereby co-create the web&apos;s future with us.
        </h5>
        <div className={styles.purple_bg}>
          <div className={styles.left_side}>
            <Image src={Flow} alt="Flow" />
          </div>
          <div className={styles.right_side}>
            <Image src={Leaf} alt="leaf" />
            <h2>Let’s build the future of the web</h2>
            <p>
              With Buidlfy, you can create amazing web3 sites easily and
              effortlessly.
            </p>
            <p>
              Putting magic in the hands of our users by providing them with
              simple drag-and-drop tools.
            </p>
            <p>Let’s build your first web3 app in no time. Try Buidlfy now:</p>
            <div className={styles.button_area}>
              <button className={styles.try_button}>
                Try for Free <ArrowRight />
              </button>
              <button className={styles.learn_button}>Learn More </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.feature_area}>
        <div className={styles.straight_grids}>
          <div className={styles.indi_feature}>
            <Image src={Click} alt="Click" />
            <h3>Power is in your hands</h3>
            <p>
              At Buidlfy, we aim to give our users the power to design quickly
              and effectively. You can add any design element just by clicking
              on it.
            </p>
            <p className={styles.link_btn_pink}>
              Try Buidlfy Now
              <ArrowTopRight />
            </p>
          </div>

          <div className={styles.gradient_edit_area}>
            <div className={styles.top_overlay}>
              <Image src={CrossTool} alt="CrossTool" />
              <Image src={UploadTool} alt="UploadTool" />
            </div>
            <div className={styles.middle_text}>
              Our words have creative power. With our words, we can speak
              blessings over our future.
              <br /> <br />~ Joel Osteen
            </div>
            <div className={styles.bottom_overlay}>
              <Image src={BrushTool} alt="BrushTool" />
              <p>31 words · 125 characters</p>
            </div>
          </div>
          <div className={`${styles.indi_feature_boxed}`}>
            <Image src={Texticon} alt="texticon" />

            <h3>Beautiful Text Styles to choose from</h3>
            <p>
              Our purpose with words is to convey our thoughts and ideas to
              those who will read them.
            </p>

            <p>
              We are working on designing attractive typefaces that will leave a
              lasting impression on the hearts of readers.
            </p>
          </div>
        </div>
        <div className={styles.straight_grids}>
          <div className={styles.indi_feature}>
            <Image src={PaintBrush} alt="paintbrush" />
            <h3>Color Styles</h3>
            <p>
              Fill in the colours of your imagination in your designs with our
              simple tools and thus paint the future of the web with us.
            </p>
          </div>
          <div className={styles.indi_feature_left}>
            <div className={styles.inner_layer}>
              <h3>Best Design System</h3>
              <p>
                Create web pages quickly with your pre-made UI design elements
                such as buttons, inputs, forms, modals, notifications, tooltips,
                and so on...
              </p>
            </div>
            <Image src={DesignSystem} alt="designsystem" />
          </div>
          <div className={styles.indi_feature_central}>
            <Image src={GradientLeaf} alt="GradientLeaf" />
            <p className={styles.gradient_blue_button}>
              Build For Free <ArrowRight />
            </p>
          </div>
        </div>
        <div className={styles.straight_grids}>
          <div className={styles.indi_feature}>
            <Image src={Landscape} alt="landscape" />
            <h3>Add Files & Media</h3>
            <p>Add your files and media to make beautiful web pages.</p>
            <Image src={Files} alt="files" />
          </div>
          <div className={styles.indi_feature_right}>
            <div className={styles.inner_layer}>
              <Image src={Devices} alt="devices" />
              <h3>Ready to use templates</h3>
              <p>
                You can always choose the best template for your needs from the
                dozens of available styles.{" "}
              </p>
              <p>
                You may easily personalise the style, content, and photos to
                meet your needs.{" "}
              </p>
            </div>
            <div className={styles.image_box}>
              <Image src={Modernnft} alt="modernnft" width={300} height={220} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImaginationFlow;
