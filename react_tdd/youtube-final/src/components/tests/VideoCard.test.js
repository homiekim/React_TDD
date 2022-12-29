import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { formatAgo } from "../../util/date";
import VideoCard from "../VideoCard";
import userEvent from "@testing-library/user-event";

describe("VideoCard", () => {
  const fakeVideoData = {
    id: 1,
    snippet: {
      title: "title",
      channelId: "1",
      channelTitle: "channelTitle",
      publishedAt: new Date(),
      thumbnails: {
        medium: {
          url: "http://image/",
        },
      },
    },
  };
  const { title, channelTitle, publishedAt, thumbnails } =
    fakeVideoData.snippet;
  it("renders video item", () => {
    render(
      <MemoryRouter>
        <VideoCard video={fakeVideoData} />
      </MemoryRouter>
    );
    const image = screen.getByRole("img");
    expect(image.src).toBe(thumbnails.medium.url);
    expect(image.alt).toBe(title);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(channelTitle)).toBeInTheDocument();
    expect(screen.getByText(formatAgo(publishedAt))).toBeInTheDocument();
  });

  it("navigate to detail video page with state when clicked", () => {
    const DetailTestingComponent = () => {
      return <pre>{JSON.stringify(useLocation().state.video)}</pre>;
    };
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<VideoCard video={fakeVideoData} />} />
          <Route
            path={`/videos/watch/${fakeVideoData.id}`}
            element={<DetailTestingComponent />}
          />
        </Routes>
      </MemoryRouter>
    );
    const card = screen.getByRole("listitem");
    userEvent.click(card);

    expect(
      screen.getByText(JSON.stringify(fakeVideoData))
    ).toBeInTheDocument();
  });
});
