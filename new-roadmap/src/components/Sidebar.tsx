import { useEffect } from "react";
import type { DataNode } from "../types";
import { Link } from "react-router";

interface SidebarProps {
  node: DataNode | null;
  breadcrumb: string;
  onClose: () => void;
}

export function Sidebar({ node, breadcrumb, onClose }: SidebarProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      <div
        className={`sidebar-overlay${node ? " visible" : ""}`}
        onClick={onClose}
      />
      <div className={`sidebar${node ? " open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-header-text">
            <div className="sidebar-breadcrumb">{breadcrumb}</div>
            <div className="sidebar-title">{node?.name}</div>
          </div>
          <button className="sidebar-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="sidebar-body">
          {node?.description && (
            <div className="sidebar-section">
              <div className="sidebar-section-label">Overview</div>
              <div className="sidebar-description">{node.description}</div>
            </div>
          )}
          {node?.tags && node.tags.length > 0 && (
            <div className="sidebar-section">
              <div className="sidebar-section-label">Tags</div>
              <div className="sidebar-tags">
                {node.tags.map((t) => (
                  <span key={t} className="sidebar-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
          {node?.sources && node.sources.length > 0 && (
            <div className="sidebar-section">
              <div className="sidebar-section-label">Resources</div>
              <div className="sidebar-sources">
                {node.sources.map((s, i) => {
                  let hostname = "";
                  let faviconUrl = "";

                  const isInternalLink = Boolean(s.route);

                  if (isInternalLink) {
                    return (
                      <Link key={i} className="sidebar-source" to={s.route!}>
                        {s.label}
                      </Link>
                    );
                  }

                  try {
                    hostname = new URL(s.url).hostname;
                    faviconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`;
                  } catch {
                    /* invalid url */
                  }

                  return (
                    <a
                      key={i}
                      className="sidebar-source"
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="source-favicon">
                        {faviconUrl ? (
                          <img src={faviconUrl} alt="" loading="lazy" />
                        ) : (
                          "🔗"
                        )}
                      </span>
                      <div className="source-info">
                        <div className="source-label">{s.label}</div>
                        {hostname && (
                          <div className="source-url">{hostname}</div>
                        )}
                      </div>
                      <span className="source-arrow">↗</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
