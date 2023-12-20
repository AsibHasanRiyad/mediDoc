

const Cards = () => {
  const cards = [
    {
      id: 1,
      logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12.82 5.58001L12 6.40201L11.176 5.57801C10.325 4.72592 9.2125 4.18431 8.0169 4.04001C6.82131 3.89572 5.6119 4.15711 4.58261 4.78227C3.55332 5.40743 2.76379 6.36014 2.34063 7.48761C1.91747 8.61509 1.8852 9.85201 2.249 11H3.854C3.47484 10.1739 3.39806 9.24084 3.63709 8.36388C3.87613 7.48692 4.41576 6.72186 5.16168 6.20242C5.90759 5.68299 6.81233 5.44222 7.71776 5.52221C8.62319 5.6022 9.4717 5.99785 10.115 6.64001L11.473 7.99701C11.5437 8.06775 11.6277 8.12365 11.7203 8.16141C11.8129 8.19918 11.9121 8.21806 12.012 8.21695C12.112 8.21583 12.2107 8.19473 12.3024 8.1549C12.3941 8.11507 12.4769 8.05731 12.546 7.98501L13.88 6.64001C14.5237 5.99786 15.3725 5.60219 16.2783 5.52206C17.184 5.44193 18.0891 5.68244 18.8356 6.2016C19.582 6.72077 20.1225 7.4856 20.3625 8.3626C20.6026 9.2396 20.527 10.1731 20.149 11H21.754C22.1149 9.85172 22.0803 8.61557 21.6557 7.48927C21.2311 6.36297 20.4411 5.41158 19.412 4.78726C18.3829 4.16293 17.1742 3.90175 15.9791 4.04546C14.7841 4.18918 13.6717 4.7295 12.82 5.58001ZM11.47 21.075L4.894 14.5H6.857C6.908 14.5 6.959 14.497 7.009 14.493L12 19.484L16.988 14.499H19.11L12.53 21.075C12.3894 21.2155 12.1987 21.2944 12 21.2944C11.8012 21.2944 11.6106 21.2155 11.47 21.075ZM9.42 8.41501C9.35707 8.28937 9.26011 8.18394 9.14017 8.11073C9.02023 8.03752 8.88214 7.99948 8.74163 8.00094C8.60112 8.0024 8.46384 8.0433 8.34545 8.11898C8.22706 8.19467 8.13231 8.30209 8.072 8.42901L6.382 11.999H2.75C2.55109 11.999 2.36032 12.078 2.21967 12.2187C2.07902 12.3593 2 12.5501 2 12.749C2 12.9479 2.07902 13.1387 2.21967 13.2793C2.36032 13.42 2.55109 13.499 2.75 13.499H6.857C6.99904 13.499 7.13816 13.4587 7.25819 13.3828C7.37821 13.3069 7.47421 13.1984 7.535 13.07L8.769 10.464L11.329 15.584C11.3865 15.6995 11.4729 15.7982 11.5798 15.8705C11.6866 15.9429 11.8103 15.9864 11.9389 15.997C12.0675 16.0075 12.1967 15.9847 12.3139 15.9308C12.4311 15.8768 12.5324 15.7936 12.608 15.689L15.306 11.953L16.436 13.243C16.5063 13.3236 16.5929 13.3882 16.6902 13.4325C16.7875 13.4768 16.8931 13.4998 17 13.5H21.25C21.4489 13.5 21.6397 13.421 21.7803 13.2803C21.921 13.1397 22 12.9489 22 12.75C22 12.5511 21.921 12.3603 21.7803 12.2197C21.6397 12.079 21.4489 12 21.25 12H17.34L15.814 10.257C15.7398 10.1722 15.6474 10.1051 15.5437 10.0609C15.4399 10.0167 15.3276 9.99643 15.215 10.0016C15.1024 10.0068 14.9924 10.0373 14.8932 10.0909C14.794 10.1445 14.7081 10.2197 14.642 10.311L12.117 13.807L9.421 8.41501H9.42Z" fill="white" />
      </svg>,
      title: "Pulse Count",
      bpm: "60 bpm",
      status: "Normal",
      color:
        "#03922B"

    },
    {
      id: 2,
      logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12.5 10.75L11.75 13.25L12.5 14.25L13.25 13.25L12.5 10.75Z" fill="white"/>
      <path  d="M17.0005 8.8165C16.5427 8.58746 16.1065 8.31736 15.6975 8.0095C14.926 7.423 14 6.474 14 5.224C14 4.1105 14.842 3 16.094 3C16.675 3 17.145 3.232 17.5 3.5785C17.8545 3.232 18.325 3 18.9065 3C20.158 3 21 4.1115 21 5.224C21 6.4355 20.0695 7.3855 19.3055 7.9755C18.8952 8.29022 18.4586 8.56908 18.0005 8.809C18.0035 9.681 18.0175 10.5135 18.0305 11.3015C18.0605 13.029 18.0855 14.5435 17.981 15.794C17.822 17.688 17.3525 19.208 15.9485 20.0305C14.568 20.839 12.528 21.143 10.8385 20.9375C9.9905 20.8345 9.181 20.5975 8.5685 20.1885C8.123 19.891 7.7695 19.4905 7.6035 18.9885C6.565 18.941 5.532 18.7515 4.715 18.4125C3.8325 18.0465 3 17.4125 3 16.42V6.561H3.0015C3.00051 6.54068 3.00001 6.52034 3 6.5C3 5.1195 5.2385 4 8 4C10.7615 4 13 5.1195 13 6.5C13 6.52 12.9995 6.541 12.9985 6.561H13V9.5355C13.833 9.65595 14.5947 10.0725 15.1455 10.7088C15.6964 11.3451 15.9996 12.1586 15.9995 13.0002C15.9994 13.8419 15.6962 14.6553 15.1452 15.2915C14.5942 15.9277 13.8325 16.3442 12.9995 16.4645C12.9765 17.472 12.171 18.1095 11.2825 18.4715C10.5475 18.7705 9.6425 18.9355 8.7175 18.9845C8.8175 19.1185 8.9525 19.2425 9.1245 19.357C9.5595 19.648 10.1995 19.8525 10.9595 19.945C12.485 20.1305 14.293 19.841 15.4435 19.1675C16.399 18.6075 16.831 17.54 16.9845 15.7105C17.085 14.5095 17.0605 13.0795 17.032 11.3915C17.0153 10.5333 17.0048 9.6749 17.0005 8.8165ZM16.094 4C15.503 4 15 4.548 15 5.224C15 5.9715 15.574 6.66 16.3025 7.2125C16.676 7.49361 17.0751 7.73902 17.4945 7.9455C17.9162 7.72783 18.3178 7.47316 18.6945 7.1845C19.4305 6.6155 20 5.9275 20 5.2245C20 4.5475 19.497 4 18.906 4C18.4945 4 18.1665 4.229 17.937 4.6425L17.5 5.431L17.063 4.6425C16.833 4.229 16.505 4 16.094 4ZM8 9C9.6355 9 11.0875 8.6075 12 8V9.535C11.1666 9.65484 10.4044 10.071 9.85298 10.7073C9.30156 11.3435 8.99794 12.1572 8.99776 12.9991C8.99757 13.841 9.30085 14.6548 9.85198 15.2913C10.4031 15.9278 11.1652 16.3443 11.9985 16.4645C11.9765 16.8535 11.662 17.237 10.9055 17.545C10.143 17.8555 9.0895 18.0115 8.0055 17.9995C7.85207 17.9977 7.6987 17.9925 7.5455 17.984V8.99C7.6955 8.9965 7.847 9 8 9ZM12 6.5C12 6.6075 11.887 6.974 11.0885 7.3735C10.3495 7.7425 9.259 8 8 8C6.741 8 5.65 7.7425 4.9115 7.3735C4.113 6.974 4 6.6075 4 6.5C4 6.3925 4.113 6.026 4.9115 5.6265C5.6505 5.2575 6.741 5 8 5C9.259 5 10.35 5.2575 11.0885 5.6265C11.887 6.026 12 6.3925 12 6.5ZM12.5 15.5C13.163 15.5 13.7989 15.2366 14.2678 14.7678C14.7366 14.2989 15 13.663 15 13C15 12.337 14.7366 11.7011 14.2678 11.2322C13.7989 10.7634 13.163 10.5 12.5 10.5C11.837 10.5 11.2011 10.7634 10.7322 11.2322C10.2634 11.7011 10 12.337 10 13C10 13.663 10.2634 14.2989 10.7322 14.7678C11.2011 15.2366 11.837 15.5 12.5 15.5Z" fill="white"/>
    </svg>,
      title: "Pulse Count",
      bpm: "60 bpm",
      status: "Slightly Higher",
      color:'#82AB0D'
    },
    {
      id: 3,
      logo:<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
      <path d="M10.8643 12.5754C11.0298 12.2852 11.2763 12.0461 11.5755 11.8856" stroke="white" />
      <path d="M13.7554 5.45328C13.8346 5.31455 13.9525 5.20024 14.0955 5.12341" stroke="white" />
      <path d="M3.3811 4.08298C3.64598 3.61866 4.04043 3.23612 4.51922 2.97925" stroke="white" />
      <path d="M5.59192 9.90636C8.12802 9.90636 10.1838 7.91266 10.1838 5.45318C10.1838 2.99371 8.12802 1 5.59192 1C3.05582 1 1 2.99371 1 5.45318C1 7.91266 3.05582 9.90636 5.59192 9.90636ZM14.7074 8.81781C15.4194 8.81781 16.1023 8.5435 16.6058 8.05522C17.1093 7.56695 17.3921 6.90471 17.3921 6.21418C17.3921 5.52366 17.1093 4.86141 16.6058 4.37314C16.1023 3.88486 15.4194 3.61055 14.7074 3.61055C13.9953 3.61055 13.3125 3.88486 12.809 4.37314C12.3055 4.86141 12.0226 5.52366 12.0226 6.21418C12.0226 6.90471 12.3055 7.56695 12.809 8.05522C13.3125 8.5435 13.9953 8.81781 14.7074 8.81781ZM12.2247 16.8335C14.1033 16.8335 15.6261 15.3567 15.6261 13.5349C15.6261 11.713 14.1033 10.2362 12.2247 10.2362C10.3461 10.2362 8.82327 11.713 8.82327 13.5349C8.82327 15.3567 10.3461 16.8335 12.2247 16.8335Z" fill="white"/>
      <path d="M8.14305 5.45312C8.14305 6.02178 7.91012 6.56715 7.49549 6.96925C7.08086 7.37135 6.5185 7.59725 5.93213 7.59725" stroke="#EDEBEB" />
      <path d="M14.2657 13.5349C14.2657 13.9723 14.0865 14.3919 13.7675 14.7012C13.4486 15.0105 13.016 15.1842 12.5649 15.1842" stroke="#EDEBEB" />
      <path d="M16.1364 6.44275C16.1364 6.70521 16.0289 6.95691 15.8375 7.1425C15.6461 7.32808 15.3866 7.43235 15.116 7.43235" stroke="#EDEBEB" />
      <path d="M5.93213 9.90636C8.46822 9.90636 10.524 7.91266 10.524 5.45318C10.524 2.99371 8.46822 1 5.93213 1C3.39603 1 1.34021 2.99371 1.34021 5.45318C1.34021 7.91266 3.39603 9.90636 5.93213 9.90636ZM14.9459 8.91677C15.6676 8.91677 16.3597 8.63874 16.87 8.14385C17.3803 7.64895 17.667 6.97773 17.667 6.27785C17.667 5.57796 17.3803 4.90674 16.87 4.41185C16.3597 3.91695 15.6676 3.63892 14.9459 3.63892C14.2242 3.63892 13.5321 3.91695 13.0218 4.41185C12.5114 4.90674 12.2248 5.57796 12.2248 6.27785C12.2248 6.97773 12.5114 7.64895 13.0218 8.14385C13.5321 8.63874 14.2242 8.91677 14.9459 8.91677ZM12.5649 16.8335C14.4435 16.8335 15.9663 15.3567 15.9663 13.5349C15.9663 11.713 14.4435 10.2362 12.5649 10.2362C10.6863 10.2362 9.16347 11.713 9.16347 13.5349C9.16347 15.3567 10.6863 16.8335 12.5649 16.8335Z" stroke="white"/>
      <path d="M12.565 16.8335C14.4436 16.8335 15.9664 15.3567 15.9664 13.5349C15.9664 11.713 14.4436 10.2362 12.565 10.2362C10.6864 10.2362 9.16357 11.713 9.16357 13.5349C9.16357 15.3567 10.6864 16.8335 12.565 16.8335Z" stroke="white" />
    </svg>,
      title: "Pulse Count",
      bpm: "60 bpm",
      status: "Slightly Higher",
      color:'#82AB0D'
    },
    {
      id: 4,
      logo:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path d="M5.16944 13.6267C5.75932 10.2684 9.5233 5.41184 11.3315 3.40332C13.3705 5.28969 14.7941 8.10499 15.251 9.27684L11.4958 11.3462L11.451 16.4844L15.6305 19.3238C14.8438 20.2512 12.71 22.1012 10.4678 22.0816C7.66517 22.0571 4.43209 17.8246 5.16944 13.6267Z" fill="white"/>
      <path d="M15.9436 10.2172L12.424 12.0551L12.3914 15.792L15.8764 17.9245L19.1604 16.3182L18.9615 12.3457L15.9436 10.2172Z" fill="white"/>
      <path d="M19.1955 12.2989L15.991 10.1531L12.3359 11.9272M19.1955 12.2989L15.84 13.8227M19.1955 12.2989L19.1598 16.3931L15.8018 18.1993M15.84 13.8227L12.3359 11.9272M15.84 13.8227L15.8018 18.1993M12.3359 11.9272L12.3011 15.9097L15.8018 18.1993M7.1937 16.7411C7.28825 17.9607 8.14002 20.4057 10.7907 20.4288M5.15644 15.1337C5.19473 10.744 9.6637 4.91071 11.363 3.05324C12.2723 4.07564 13.9366 6.46549 15.2109 9.11542L11.5254 11.2452L11.3529 16.4779L15.6318 19.1861C15.6318 19.1861 13.0032 21.9399 11.1979 21.9691C6.96383 22.0375 5.12963 18.2068 5.15644 15.1337Z" stroke="#EDEBEB"/>
    </svg>,
      title: "Pulse Count",
      bpm: "60 bpm",
      status: "Normal",
      color:'#03922B'
    },
  ];

  

  return (
    <div className=" grid grid-cols-2 mid:grid-cols-4 gap-10 mt-8 small:px-5 mid:px-0" >
      {cards.map((card) => (
        <div  key={card.id}>
          <div className=" bg-white dark:bg-[#2D2322] shadow-md px-3 py-5 shadow-[#b8b7b7] dark:shadow-none rounded-md">
            <div className=" bg-[#ff2d2d99] dark:bg-[#969191] p-2 w-10 h-10 rounded ">
              {card.logo}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className=" text-sm mt-2 text-[#2E1619] dark:text-[#D1D5DB] font-semibold">
                {card.title}
              </h1>
              <h1 className="text-2xl text-[#4A3D3F] dark:text-[#D1D5DB] font-medium">
                {card.bpm}
              </h1>
              <div className=" flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  
                >
                  <path
                    d="M1.33669 8.69999H9.35685C9.43805 8.69974 9.51764 8.67734 9.58706 8.63522C9.65648 8.59309 9.7131 8.53283 9.75082 8.46092C9.78854 8.38901 9.80593 8.30818 9.80112 8.22712C9.79632 8.14606 9.7695 8.06785 9.72355 8.0009L5.71347 2.20856C5.54727 1.9684 5.14716 1.9684 4.98052 2.20856L0.970435 8.0009C0.924019 8.06771 0.896799 8.14596 0.891733 8.22716C0.886667 8.30835 0.90395 8.38938 0.941703 8.46144C0.979455 8.5335 1.03623 8.59384 1.10587 8.63589C1.17551 8.67795 1.25534 8.70012 1.33669 8.69999Z"
                    fill="gray"
                  />
                </svg>
                <h1 
                style={{ color: card.color }} 
                className=" mid:text-xs text-sm large:text-base font-medium">
                  {card.status}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
