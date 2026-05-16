import { WebTemplate } from "@/components/WebTemplate";

export default function Home() {
  return (
    <>
      <div className="intro">
        <h1 className="title">react-web-template</h1>
        <p className="subtitle">
          Tiny, headless layout primitive for React. CSS Grid holy-grail layout with optional header
          / footer / sidebar slots.
        </p>
      </div>

      <div className="demo-wrapper">
        <WebTemplate
          header={<div className="demo-header">Header</div>}
          footer={<div className="demo-footer">Footer</div>}
          leftNav={
            <div className="demo-nav">
              <span>Left Nav</span>
              <span>· Item A</span>
              <span>· Item B</span>
            </div>
          }
          rightNav={
            <div className="demo-nav">
              <span>Right Nav</span>
              <span>· Aside</span>
            </div>
          }
          mainClassName="demo-main"
        >
          <p>
            This <code>&lt;main&gt;</code> is the content slot. Sidebars, header, and footer are
            optional — pass only what you need and the grid adapts.
          </p>
          <p>
            <a
              className="github-link"
              href="https://github.com/piro0919/react-web-template"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub →
            </a>
          </p>
        </WebTemplate>
      </div>
    </>
  );
}
